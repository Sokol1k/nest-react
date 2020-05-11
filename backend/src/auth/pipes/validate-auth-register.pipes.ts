import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import * as Joi from '@hapi/joi';

@Injectable()
export class ValidationAuthRegisterPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {

        const schema = Joi.object({
            username: Joi.string().min(3).max(255).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(255).required(),
        })

        const { error } = schema.validate(value);

        if(error) {
            
            throw new BadRequestException(error.details[0].message);
        }

        return value;
    }
}