import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
    {
        first: String,
        last: String,
        email: String,
        phone: String,
        city: String,
    },
    { timestamps: true }
);

contactSchema.virtual('attachments', {
    ref: 'Attachment',
    localField: '_id',
    foreignField: 'contact',
    justOne: false,
});

contactSchema.set('toObject', { virtuals: true });
contactSchema.set('toJSON', { virtuals: true });

const Contact = model('Contact', contactSchema);

const get = (_id: string, populate?: string | object) =>
    Contact.findOne({ _id }).populate(populate);

const list = (populate?: string | object) =>
    Contact.find({}).populate(populate);

const create = (data) => new Contact(data).save();

const update = (_id, data) =>
    Contact.findByIdAndUpdate(_id, data, { new: true });

const remove = (_id) => Contact.findOneAndDelete({ _id });

export default { get, list, create, update, remove };
