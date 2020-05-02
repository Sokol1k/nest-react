import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPost } from './interfaces/post.interface';
import { PostDTO } from './dto/post.dto';

@Injectable()
export class PostService {

    constructor(@InjectModel('Post') private readonly postModel: Model<IPost>) { }

    async getPosts(): Promise<IPost[]> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    async getPost(postID): Promise<IPost> {
        const post = await this.postModel
            .findById(postID)
            .exec();
        return post;
    }

    async addPost(postDTO: PostDTO): Promise<IPost> {
        const newPost = await this.postModel(postDTO);
        return newPost.save();
    }

    async editPost(postID, postDTO: PostDTO): Promise<IPost> {
        const editedPost = await this.postModel
            .findByIdAndUpdate(postID, postDTO, { new: true });
        return editedPost;
    }

    async deletePost(postID): Promise<any> {
        const deletedPost = await this.postModel
            .findByIdAndRemove(postID);
        return deletedPost;
    }

}