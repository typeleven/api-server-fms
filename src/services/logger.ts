import winston from 'winston';
import { Loggly } from 'winston-loggly-bulk';
import config from '../config';
import axios from 'axios';
import { Response } from 'express';

const { logglyUsername, logglyPassword, logglySubdomain, env } = config.app;

if (config.app.logglyApiKey)
    winston.add(
        new Loggly({
            token: config.app.logglyApiKey!,
            subdomain: config.app.logglySubdomain!,
            tags: [config.app.serverName],
            json: true,
        })
    );

const sendLog = async (level: string, message: string | object) => {
    // do not log if there is no loggly config found
    if (!config.app.logglyApiKey) return;
    // log debug and info only in development
    if (env !== 'development' && ['debug', 'info'].includes(level)) return;

    winston.log(level, {
        env: config.app.env,
        message: message,
        server: config.app.serverName,
    });
};

const getLogs = async (res: Response, howFarBack: string = '1d') => {
    if (!config.app.logglyApiKey)
        return res.boom.badRequest('Logging is not setup on this server.');
    const client = axios.create({
        auth: {
            username: logglyUsername!,
            password: logglyPassword!,
        },
    });

    try {
        const response = await client.get(
            `https://${logglySubdomain}.loggly.com/apiv2/events/iterate?q=*&from=-${howFarBack}&until=now&size=100`
        );
        res.send(response.data);
    } catch (error) {
        res.boom.badRequest(error);
    }
};

export default { sendLog, getLogs };

// logger('debug', 'example debug log');
// logger('info', 'example info log');
// logger('warn', 'example warning log');
// logger('error', 'example error log');
