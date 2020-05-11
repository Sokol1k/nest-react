import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    PostModule,
    AuthModule,
  ],
})
export class AppModule { }
