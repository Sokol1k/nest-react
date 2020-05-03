import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-react', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    PostModule,
    AuthModule,
  ],
})
export class AppModule { }
