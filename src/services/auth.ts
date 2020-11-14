import { RequestHandler } from 'express';
import config from '../config';
import jwt from 'jsonwebtoken';
import { AccountInterface } from '../models/accounts';

const { app } = config;

const validation: RequestHandler = (req: any, res, next) => {
    const apiKeys = [...app.apiKeyArray, app.apiKey];

    if (apiKeys.includes(req.headers['x-api-key'])) return next();
    if (apiKeys.includes(req.query['x-api-key'])) return next();

    if (req.headers.authorization) {
        let token;
        token = req.headers.authorization?.startsWith('Bearer')
            ? req.headers.authorization.split(' ')[1]
            : req.headers.authorization;
        const decoded: any = jwt.verify(token, config.app.tokenSecret!);
        if (!decoded) res.boom.unauthorized();
        req.account = { _id: decoded.id };
        return next();
    }

    res.boom.unauthorized();
};

const decryptToken = (token: string) => {
    return jwt.decode(token);
};

const createAuthToken = (account: AccountInterface) => {
    return jwt.sign({ id: account._id }, config.app.tokenSecret!, {
        expiresIn: config.app.tokenExpiresIn,
    });
};

const createRefreshToken = (account: AccountInterface) => {
    return jwt.sign(
        { _id: account._id },
        config.app.refreshSecret! + account.password,
        {
            expiresIn: config.app.refreshExpiresIn,
        }
    );
};

const verifyRefreshToken = (account: AccountInterface, token: string) => {
    return jwt.verify(token, config.app.refreshSecret! + account.password);
};

export default {
    validation,
    createAuthToken,
    createRefreshToken,
    verifyRefreshToken,
    decryptToken,
};
