import { Schema } from 'mongoose';

export const PostSchema = new Schema({
    author_id: Schema.Types.ObjectId,
    title: String,
    description: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})