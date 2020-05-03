import { Document } from 'mongoose';

export interface IAuth extends Document {
    readonly username: string;
    readonly email: string;
    readonly password: string;
}
