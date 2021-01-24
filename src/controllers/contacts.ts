import Contact from '../models/contacts';

const create = async (data: object) => {
    await Contact.create(data);
};

const get = async (_id: string) => {
    await Contact.get(_id, 'attachments');
};

const list = async () => {
    await Contact.list('attachments');
};

const update = async (_id: string, data: object) => Contact.update(_id, data);

const remove = async (_id: string) => {
    await Contact.remove({ _id });
};

export default { create, remove, update, get, list };
