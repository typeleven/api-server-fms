import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

const schema = new Schema(
    {
        first: { type: String, required: true },
        last: { type: String, required: true },
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        inactive: { type: Boolean, default: false },
        permissions: { type: Array, default: ['created'] },
    },
    { timestamps: true }
);

export interface AccountInterface extends Document {
    first: string;
    last: string;
    username: string;
    email: string;
    password: string;
    inactive: boolean;
    permissions: string[];
}

schema.pre<AccountInterface>('save', async function () {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    if (this.username) {
        this.username = this.username.toLowerCase();
    }
    if (this.email) {
        this.email = this.email.toLowerCase();
    }
});

const Account = model<AccountInterface>('Account', schema);

export default Account;
