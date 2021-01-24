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

export default Attachment;
