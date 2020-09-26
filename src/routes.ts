import { validation } from './services';
import { Application } from 'express';

const { errors } = validation;

import api from './api';

// base routes for the server

export default (app: Application) => {
    app.use('/', require('./api/health'));

    app.use('/api', api);

    app.use('/google', (req, res) => res.redirect('http://google.com'));

    app.use(errors);
};
