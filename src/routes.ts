import services from './services';
import { Application } from 'express';
import health from './api/health';

const { errors } = services.validation;

import api from './api';

// base routes for the server

export default (app: Application) => {
    app.use('/', health);

    app.use('/api', api);

    app.use('/google', (req, res) => res.redirect('http://google.com'));

    app.use(errors);
};