const { Filemaker } = require('fms-api-client');
import config from '../config';
import { RequestHandler } from 'express';

const { filemaker } = config;

const addFmsClient: RequestHandler = async (req: any, res, next) => {
    try {
        let client = await Filemaker.findOne({
            'agent.connection.server': config.filemaker.server,
            'agent.connection.database': config.filemaker.database,
        });

        if (!client) {
            client = await Filemaker.create(config.filemaker);
            await client.save();
        }

        req.locals = {};
        req.locals.filemaker = client;
        next();
    } catch (error) {
        console.log(error);
        res.boom.serverUnavailable();
    }
};

export default { addFmsClient, Filemaker };
