import { Injectable, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IAuth } from './interfaces/auth.interface';
import { AuthDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {

    constructor(@InjectModel('User') private readonly authModel: Model<IAuth>) { }

    async register(authDTO: AuthDTO): Promise<void> {

        const username = await this.authModel.findOne({ username: authDTO.username}).exec();

        if(username) {
            throw new BadRequestException('Username is exists');
        }

        const email = await this.authModel.findOne({ email: authDTO.email}).exec();

        if(email) {
            throw new BadRequestException('Email is exists');
        }

        return await this.authModel(authDTO).save();
    }
}

