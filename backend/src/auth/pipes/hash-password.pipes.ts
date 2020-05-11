import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashPasswordPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {

        value.password = await bcrypt.hash(value.password, 10)
        
        return value;
    }
}