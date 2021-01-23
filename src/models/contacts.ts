import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
    {
        first: String,
        last: String,
        email: String,
        phone: String,
        city: String,
        attachment: {
            type: Schema.Types.ObjectId,
            ref: 'Attachment',
        },
    },
    { timestamps: true }
);

const Contact = model('Contact', contactSchema);

export default Contact;
