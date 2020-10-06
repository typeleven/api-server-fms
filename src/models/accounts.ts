import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

const schema = new Schema(
    {
        first: { type: String, required: true },
        last: { type: String, required: true },
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        permissions: { type: Array, default: () => ['created'] },
    },
    { timestamps: true }
);

export interface AccountInterface extends Document {
    first: string;
    last: string;
    username: string;
    email: string;
    password: string;
    permissions: string[];
}

schema.pre<AccountInterface>('save', async function (next) {
    if (!this.isModified('password')) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const Account = model<AccountInterface>('Account', schema);

export default Account;
