import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import * as Joi from '@hapi/joi';

@Injectable()
export class ValidationPostPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {

        const schema = Joi.object({
            title: Joi.string().min(3).max(255).required(),
            description: Joi.string().min(3).max(5000).required(),
        })

        const { error } = schema.validate(value);

        if(error) {
            
            throw new BadRequestException(error.details[0].message);
        }

        return value;
    }
}