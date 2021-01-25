import Attachment from '../models/attachments.model';

const create = async (data: object) => await Attachment.create(data);

const get = async (_id: string) => await Attachment.get(_id, 'contact');

const list = async () => await Attachment.list('contact');

const update = async (_id: string, data: object) =>
    Attachment.update(_id, data);

const remove = async (_id: string) => await Attachment.remove({ _id });

export default { create, remove, update, get, list };
