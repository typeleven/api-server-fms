import { attachments } from '../models';

const create = async (data: object) => await attachments.create(data);

const get = async (_id: string) => await attachments.get(_id, 'contact');

const list = async () => await attachments.list('contact');

const update = async (_id: string, data: object) =>
    attachments.update(_id, data);

const remove = async (_id: string) => await attachments.remove(_id);

export default { create, remove, update, get, list };
