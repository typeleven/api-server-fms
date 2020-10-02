import express, { Request } from 'express';
import services from '../../services';
import { celebrate, Joi } from 'celebrate';

const router = express.Router();
const { sendLog, getLogs } = services.logger;

router.post(
    '/',
    celebrate({
        query: {
            level: Joi.string()
                .valid('info', 'error', 'warn', 'debug')
                .default('info'),
        },
    }),
    (req: any, res) => {
        sendLog(req.query.level || 'info', req.body);
        res.send({ message: 'Log Sent' });
    }
);

router.get('/', (req: any, res) => {
    getLogs(res, req.query.howFarBack);
});

export default router;
