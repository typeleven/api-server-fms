import services from './services';
import { Application } from 'express';
import health from './api/health';
import cors from 'cors';
import config from './config';
import swaggerJsDoc, { SwaggerDefinition } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// https://swagger.io/specification/#infoObject
const swaggerDefinition: SwaggerDefinition = {
    info: {
        title: 'FMS API Server',
        description: 'Express API Server with FMS Connections',
        version: '3.0.3',
        // servers: [`http://localhost:${config.app.port}`],
    },
};

const { errors } = services.validation;

import api from './api';

// base routes for the server

export default (app: Application) => {
    app.use(cors());

    app.use('/', health);

    app.use('/api', api);

    app.use('/google', (req, res) => res.redirect('http://google.com'));

    app.use(errors);
};
