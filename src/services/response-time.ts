import responseTime from 'response-time';
import { compose } from 'compose-middleware';
import logger from './logger';

const requestTimeLogger = compose([
    responseTime((req: any, res, time) => {
        // log request that take  more than 500ms
        if (time > 500)
            logger('warn', {
                time,
                message: 'Response Time Log',
                ip: req.ip,
                method: req.method,
                baseUrl: req.baseUrl,
                path: req.path,
                originalUrl: req.originalUrl,
                body: req.body,
                query: req.query,
                params: req.params,
            });
    }),
]);

export default requestTimeLogger;
