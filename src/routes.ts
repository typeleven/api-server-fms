import config from './config';
import services from './services';
import { Application } from 'express';
import cors from 'cors';
import api from './api';

const { errors } = services.validation;
const { rateLimiterGlobal } = services.rateLimit;

// base routes for the server

export default (app: Application) => {
    app.use(cors());

    app.use(services.responseTime);

    app.use('/api', api);

    // app.use('/', (req, res) => res.send({ message: 'API Server' }));

    config.app.env !== 'development'
        ? app.use(rateLimiterGlobal)
        : console.log('🚀 Rate Limiter Disabled');

    app.use(errors);
};
