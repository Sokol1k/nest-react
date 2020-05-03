import {
    Controller,
    Get,
    Res,
    HttpStatus,
    Param,
    NotFoundException,
    Post,
    Body,
    Put,
    Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDTO } from './dto/post.dto';
import { ValidateObjectId } from './pipes/validate-object-id.pipes';
import { ValidationPostPipe } from './pipes/validate-post.pipes';


@Controller('post')
export class PostController {

    constructor(private postService: PostService) { }

    @Get()
    async getPosts(@Res() res) {
        const posts = await this.postService.getPosts();
        return res.status(HttpStatus.OK).json(posts);
    }

    @Post()
    async addPost(@Res() res, @Body(new ValidationPostPipe()) postDTO: PostDTO) {
        const newPost = await this.postService.addPost(postDTO);
        return res.status(HttpStatus.CREATED).json(newPost);
    }

    @Get(':id')
    async getPost(@Res() res, @Param('id', new ValidateObjectId()) id) {
        const post = await this.postService.getPost(id);
        if (!post) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(post);
    }

    @Put(':id')
    async editPost(
        @Res() res,
        @Param('id', new ValidateObjectId()) id,
        @Body(new ValidationPostPipe()) PostDTO: PostDTO
    ) {
        const editedPost = await this.postService.editPost(id, PostDTO);
        if (!editedPost) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(editedPost);
    }

    @Delete(':id')
    async deletePost(@Res() res, @Param('id', new ValidateObjectId()) id) {
        const deletedPost = await this.postService.deletePost(id);
        if (!deletedPost) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(deletedPost);
    }
}