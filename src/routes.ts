import config from './config';
import services from './services';
import { Application } from 'express';
import cors from 'cors';
import api from './api';

const { requestTimeLogger } = services.responseTime;
const { handleErrors } = services.validation;
const { rateLimiterGlobal } = services.rateLimit;

// base routes for the server

export default (app: Application) => {
    app.use(cors());

    app.use(requestTimeLogger);

    app.use('/api', api);

    app.use(handleErrors);

    config.app.env !== 'development'
        ? app.use(rateLimiterGlobal)
        : console.log('🚀 Rate Limiter Disabled');
};
