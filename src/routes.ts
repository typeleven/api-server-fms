import services from './services';
import { Application } from 'express';
import cors from 'cors';
import config from './config';

const { errors } = services.validation;
const { rateLimiterGlobal } = services.rateLimit;

import api from './api';

// base routes for the server

export default (app: Application) => {
    app.use(cors());

    app.use('/', (req, res) => res.send({ message: 'API Server' }));

    app.use('/api', api);

    config.app.env !== 'development'
        ? app.use(rateLimiterGlobal)
        : console.log('🚀 Rate Limiter Disabled');

    app.use(errors);

    app.use((req, res) => res.boom.notFound());
};
