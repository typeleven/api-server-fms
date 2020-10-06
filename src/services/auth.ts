import { RequestHandler } from 'express';
import config from '../config';
import jwt from 'jsonwebtoken';
import { AccountInterface } from '../models/accounts';

const { app } = config;

const validation: RequestHandler = (req, res, next) => {
    if (req.headers['x-api-key'] === app.apiKey) next();
    if (req.query['x-api-key'] === app.apiKey) next();

    res.boom.unauthorized();
};

const createAuthToken = (account: AccountInterface) => {
    return jwt.sign({ id: account._id }, config.app.tokenSecret!, {
        expiresIn: config.app.tokenExpiresIn,
    });
};

const createRefreshToken = (account: AccountInterface) => {
    return jwt.sign(
        { id: account._id },
        config.app.tokenSecret! + account.password,
        {
            expiresIn: config.app.tokenExpiresIn,
        }
    );
};

export default { validation, createAuthToken, createRefreshToken };
