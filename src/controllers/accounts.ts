import Account, { AccountInterface } from '../models/accounts';
import bcrypt from 'bcrypt';
import auth from '../services/auth';
import { RequestHandler, Response } from 'express';
import services from '../services';

const create = async (data: object) => {
    try {
        const account = new Account(data);
        await account.save();
        return account;
    } catch (error) {
        throw new Error(error);
    }
};

const get = async (_id: string) => {
    try {
        const result = await Account.findOne({ _id }).select('-password');
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const update = async (_id: string, data: object) => {
    try {
        const update = await Account.findOneAndUpdate({ _id }, data);
        const result = await Account.findOne({ _id });
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const remove = async (_id: string) => {
    try {
        const result = await Account.findOneAndDelete({ _id });
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const login = async (username: string, password: string) => {
    try {
        const account = await Account.findOne({
            username: username.toLowerCase(),
        });
        if (!account) throw new Error('Invalid username or password.');

        if (account.inactive) throw new Error('This account is inactive.');

        const passwordMatch = await bcrypt.compare(password, account.password);
        if (!passwordMatch) throw new Error('Invalid username or password.');

        return account;
    } catch (error) {
        throw new Error(error);
    }
};

const refresh = async (refreshToken: string, res: Response) => {
    try {
        const { _id } = <{ _id: string }>auth.decryptToken(refreshToken);
        const account = await Account.findById(_id);
        if (!account) throw new Error('Account not found.');
        if (account.inactive)
            return res.boom.unauthorized('This account is inactive.');
        const verified = services.auth.verifyRefreshToken(
            account,
            refreshToken
        );
        if (verified!) return account;
    } catch (error) {
        throw new Error(error);
    }
};

const attachAccount: RequestHandler = async (req: any, res, next) => {
    const account = await Account.findById(req.account._id).select([
        '-password',
    ]);
    req.account = account;
    next();
};

const requireAdmin: RequestHandler = async (req: any, res, next) => {
    const account: any = await Account.findById(req.account._id).select([
        'permissions',
    ]);
    if (account?.permissions.includes('admin')) return next();
    return res.boom.unauthorized();
};

export default {
    create,
    remove,
    update,
    get,
    login,
    refresh,
    attachAccount,
    requireAdmin,
};
