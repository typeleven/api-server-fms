import config from './config';
import services from './services';
import { Application } from 'express';
import cors from 'cors';

const { errors } = services.validation;
const { rateLimiterGlobal } = services.rateLimit;

import api from './api';

// base routes for the server

export default (app: Application) => {
    // app.use(cors());

    app.use(services.responseTime);

    app.use('/api', api);

    app.use('/', (req, res) => res.send({ message: 'API Server' }));

    config.app.env !== 'development'
        ? app.use(rateLimiterGlobal)
        : console.log('🚀 Rate Limiter Disabled');

    app.use(errors);

    app.use((req, res) => res.boom.notFound());
};
