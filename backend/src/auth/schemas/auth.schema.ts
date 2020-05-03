import { Schema } from 'mongoose';

export const AuthSchema = new Schema({
    username: {
        type: String,
        index: true,
        unique: true,
    },
    email: {
        type: String,
        index: true,
        unique: true,
    },
    password: String
})