import express, { RequestHandler } from 'express';
import { celebrate, Joi } from 'celebrate';

const router = express.Router();

const response: RequestHandler = (req, res) =>
    res.json({ message: 'Validation Passed' });

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

module.exports = router;
