import { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { Request } from 'express';
import { pagination } from '../services';
import { utils } from '../services';

const contactSchema = new Schema(
    {
        first: String,
        last: String,
        email: String,
        phone: String,
        city: String,
    },
    { timestamps: true, id: false }
);

contactSchema.virtual('attachments', {
    ref: 'Attachment',
    localField: '_id',
    foreignField: 'contact',
    justOne: false,
});

contactSchema.plugin(mongoosePaginate);
contactSchema.set('toObject', { virtuals: true });
contactSchema.set('toJSON', { virtuals: true });

const Contact = model('Contact', contactSchema);

const get = (_id: string, populate?: string | object) =>
    Contact.findOne({ _id }).populate(populate);

const list = (req: Request) => Contact.paginate({}, pagination.getOptions(req));

const search = async (req: Request) => {
    const query = utils.sanitize(req.body, ['regex']);
    const results = await Contact.paginate(query, pagination.getOptions(req));
    return {
        ...results,
        query,
    };
};

const create = (data: object) => new Contact(data).save();

const update = (_id: string, data: object) =>
    Contact.findByIdAndUpdate(_id, data, { new: true });

const remove = (_id: string) => Contact.findOneAndDelete({ _id });

export default { get, list, search, create, update, remove };
