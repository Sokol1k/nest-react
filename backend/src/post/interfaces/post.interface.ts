import { Document, Schema } from 'mongoose';

export interface IPost extends Document {
    readonly author_id: Schema.Types.ObjectId;
    readonly title: string;
    readonly description: string;
    readonly created_at: Date;
    readonly updated_at: Date;
}