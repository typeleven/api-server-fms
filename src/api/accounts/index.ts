import express from 'express';
import controllers from '../../controllers';
import asyncHandler from 'express-async-handler';
import services from '../../services';
import { AccountInterface } from '../../models/accounts';
const router = express.Router();

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const account = await controllers.accounts.create(req.body);
        res.send({ message: 'Account Created', _id: account._id });
    })
);

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const result = await controllers.accounts.get(req.params.id);
        result
            ? res.send(result)
            : res.boom.badRequest(`No Account found with _id ${req.params.id}`);
    })
);

router.patch(
    '/:id',
    asyncHandler(async (req, res) => {
        const result = await controllers.accounts.update(
            req.params.id,
            req.body
        );
        result
            ? res.send(result)
            : res.boom.badRequest(`No Account found with _id ${req.params.id}`);
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const result = await controllers.accounts.remove(req.params.id);
        result
            ? res.send({ message: 'Account Deleted' })
            : res.boom.badRequest(`No Account found with _id ${req.params.id}`);
    })
);

router.post(
    '/login',
    asyncHandler(async (req, res) => {
        const account: AccountInterface = await controllers.accounts.login(
            req.body.username,
            req.body.password
        );
        res.send({
            token: services.auth.createAuthToken(account),
            refresh: services.auth.createRefreshToken(account),
        });
    })
);

export default router;
