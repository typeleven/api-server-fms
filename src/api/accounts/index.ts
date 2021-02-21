import express from 'express';
import controllers from '../../controllers';
import asyncHandler from 'express-async-handler';
import services from '../../services';
import { AccountInterface } from '../../models/accounts';
import config from '../../config';
const router = express.Router();

if (config.app.env !== 'development')
    router.use(services.rateLimit.rateLimiterStrict);

// account creation
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const account = await controllers.accounts.create(req.body);
        res.send({ message: 'Account Created', _id: account._id });
    })
);

// refresh use refresh token to get new auth token
router.get(
    '/refresh',
    asyncHandler(async (req, res) => {
        if (!req.headers.authorization)
            return res.boom.badRequest('Refresh token is required.');
        const account: any = await controllers.accounts.refresh(
            req.headers.authorization,
            res
        );
        res.send({
            token: services.auth.createAuthToken(account),
            refresh: services.auth.createRefreshToken(account),
        });
    })
);

// login with username and password
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

router.get(
    '/:id',
    services.auth.validation,
    controllers.accounts.requireAdmin,
    asyncHandler(async (req, res) => {
        const result = await controllers.accounts.get(req.params.id);
        result
            ? res.send(result)
            : res.boom.badRequest(`No Account found with _id ${req.params.id}`);
    })
);

router.patch(
    '/:id',
    services.auth.validation,
    controllers.accounts.requireAdmin,
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
    services.auth.validation,
    controllers.accounts.requireAdmin,
    asyncHandler(async (req, res) => {
        const result = await controllers.accounts.remove(req.params.id);
        result
            ? res.send({ message: 'Account Deleted' })
            : res.boom.badRequest(`No Account found with _id ${req.params.id}`);
    })
);

export default router;
