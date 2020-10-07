import express, { RequestHandler } from 'express';
import services from '../../services';
import fms from './fms';
import db from './db';
import { celebrate, Joi } from 'celebrate';
import controllers from '../../controllers';

const router = express.Router();

const response: RequestHandler = (req: any, res) =>
    res.json({ message: 'Test Passed' });

router.use('/fms', fms);
router.use('/db', db);

router.get('/', (req, res) =>
    res.json({
        message: 'sandbox',
    })
);

router.post(
    '/newUser',
    celebrate({
        body: {
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required().allow(''),
        },
    }),
    response
);

router.get('/basicAuth', services.auth.validation, response);
router.get(
    '/attachUser',
    services.auth.validation,
    controllers.accounts.attachAccount,
    (req: any, res) => res.send(req.account)
);

export default router;
