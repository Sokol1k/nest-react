import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IAuth } from './interfaces/auth.interface';
import { AuthDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {

    constructor(@InjectModel('User') private readonly authModel: Model<IAuth>) { }

    async register(authDTO: AuthDTO): Promise<void> {
        const newAuth = await this.authModel(authDTO);
        newAuth.save();
    }

}

