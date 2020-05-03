import {
    Controller,
    Res,
    HttpStatus,
    Post,
    Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('register')
    async register(@Res() res, @Body() authDTO: AuthDTO) {
        await this.authService.register(authDTO);
        return res.status(HttpStatus.CREATED).json({
            m: "ok"
        });
    }
}
