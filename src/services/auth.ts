import { RequestHandler } from 'express';
import config from '../config';

const { app } = config;

const validation: RequestHandler = (req, res, next) => {
    if (req.headers['x-api-key'] === app.apiKey) next();
    if (req.query['x-api-key'] === app.apiKey) next();

    res.boom.unauthorized();
};

export default { validation };
