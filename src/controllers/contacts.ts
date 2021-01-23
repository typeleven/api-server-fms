import Contact from '../models/contacts';

const create = async (data: object) => {
    try {
        const contact = new Contact(data);
        await contact.save();
        return contact;
    } catch (error) {
        throw new Error(error);
    }
};

const get = async (_id: string) => {
    try {
        const result = await Contact.findOne({ _id }).populate('attachments');
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const list = async () => {
    try {
        const result = await Contact.find({});
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const update = async (_id: string, data: object) => {
    try {
        const update = await Contact.findOneAndUpdate({ _id }, data);
        const result = await Contact.findOne({ _id });
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const remove = async (_id: string) => {
    try {
        const result = await Contact.findOneAndDelete({ _id });
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

export default { create, remove, update, get, list };
