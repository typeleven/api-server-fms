const { Filemaker } = require('fms-api-client');
import config from '../config';
import { RequestHandler, Response } from 'express';
import tough from 'tough-cookie';
import axios from 'axios';
import axiosCookieJarSupport from 'axios-cookiejar-support';
axiosCookieJarSupport(axios);

const cookieJar = new tough.CookieJar();
const instance = axios.create();

const pipeContainerUrl = async (url: string, res: Response) => {
    try {
        const response = await instance.get(url, {
            jar: cookieJar,
            responseType: 'stream',
            withCredentials: true,
        });
        return response.data.pipe(res);
    } catch (error) {
        return new Error();
    }
};

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

export default { addFmsClient, Filemaker, pipeContainerUrl };
