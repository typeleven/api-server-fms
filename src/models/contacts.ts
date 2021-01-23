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

export default Contact;
