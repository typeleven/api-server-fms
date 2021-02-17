import { contacts } from '../models';

const create = async (data: object) => await contacts.create(data);

const createMany = async (data: object[]) => await contacts.createMany(data);

const get = async (_id: string) => await contacts.get(_id, 'attachments');

const list = async (req) => await contacts.list(req);

const search = async (req) => await contacts.search(req);

const update = async (_id: string, data: object) => contacts.update(_id, data);

const remove = async (_id: string) => await contacts.remove(_id);

export default { create, createMany, remove, update, get, list, search };
