import Attachment from '../models/attachments';

const create = async (data: object) => {
    try {
        const attachment = new Attachment(data);
        await attachment.save();
        return attachment;
    } catch (error) {
        throw new Error(error);
    }
};

const get = async (_id: string) => {
    try {
        const result = await Attachment.findOne({ _id });
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const list = async () => {
    try {
        const result = await Attachment.find({}).populate('contact');
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const update = async (_id: string, data: object) => {
    try {
        const update = await Attachment.findOneAndUpdate({ _id }, data);
        const result = await Attachment.findOne({ _id });
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const remove = async (_id: string) => {
    try {
        const result = await Attachment.findOneAndDelete({ _id });
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

export default { create, remove, update, get, list };
