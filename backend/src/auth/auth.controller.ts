import {
    Controller,
    Res,
    HttpStatus,
    Post,
    Body,
    UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';
import { ValidationAuthRegisterPipe } from './pipes/validate-auth-register.pipes';
import { HashPasswordPipe } from './pipes/hash-password.pipes';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('register')
    @UsePipes(new ValidationAuthRegisterPipe())
    @UsePipes(new HashPasswordPipe())
    async register(@Res() res, @Body() authDTO: AuthDTO) {

        await this.authService.register(authDTO)

        return res.status(HttpStatus.CREATED).json({
            message: "User successfully registered"
        });
    }
}
