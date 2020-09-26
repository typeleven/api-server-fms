// origination of the server process
// global middleware

import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import boom from 'express-boom';

const app = express();

// res.boom.badRequest('invalid query') // 400
// res.boom.unauthorized('invalid password') // 401
// res.boom.paymentRequired('bandwidth used') // 402
// res.boom.forbidden('try again later') // 403
// res.boom.notFound('item not found') // 404
app.use(boom());

app.use(
    bodyParser.json({
        limit: config.app.bodySizeLimit,
    })
);

app.use(
    bodyParser.urlencoded({
        extended: true,
        parameterLimit: config.app.parameterLimit,
        limit: config.app.bodySizeLimit,
    })
);

export default app;
