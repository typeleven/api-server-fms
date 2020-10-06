import Account, { AccountInterface } from '../models/accounts';
import bcrypt from 'bcrypt';

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
        const result = await Account.findOne({ _id });
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
        const account = await Account.findOne({ username });
        if (!account) throw new Error('Invalid username or password.');

        const passwordMatch = await bcrypt.compare(password, account.password);
        if (!passwordMatch) throw new Error('Invalid username or password.');

        return account;
    } catch (error) {
        throw new Error(error);
    }
};

export default { create, remove, update, get, login };
