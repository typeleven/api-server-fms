import { model, Schema } from 'mongoose';

const attachmentSchema = new Schema(
    {
        name: String,
        type: String,
        uri: String,
        contact: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Contact',
            },
        ],
    },
    { timestamps: true }
);

const Attachment = model('Attachment', attachmentSchema);

const get = (_id: string, populate?: string | object) =>
    Attachment.findOne({ _id }).populate(populate);

const list = (populate?: string | object) =>
    Attachment.find().populate(populate);

const create = (data) => new Attachment(data).save();

const update = async (_id, data) =>
    Attachment.findByIdAndUpdate(_id, data, { new: true });

const remove = (_id) => Attachment.findOneAndDelete({ _id });

export default { get, list, create, update, remove };
