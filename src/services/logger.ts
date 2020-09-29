import winston from 'winston';
import { Loggly } from 'winston-loggly-bulk';
import config from '../config';

winston.add(
    new Loggly({
        token: config.app.logglyApiKey!,
        subdomain: config.app.logglySubdomain!,
        tags: ['express-server'],
        json: true,
    })
);

const logger = (level: string, message: string | object) => {
    if (!config.app.logglyApiKey) return;
    winston.log(level, {
        env: config.app.env,
        message: message,
        server: config.app.serverName,
    });
};

export default logger;
