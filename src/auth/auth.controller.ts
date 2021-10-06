import { Body, Controller, Post, UnauthorizedException, UsePipes, ValidationPipe } from '@nestjs/common';
import { isObject } from 'class-validator';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';



@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}


    @UsePipes(new ValidationPipe())
    @Post('registration')
    create(@Body() body: AuthDto ) {
        const user = this.authService.findUser(body.username)
        if (isObject(user)) {
            throw new UnauthorizedException('user on db')
        }
        return this.authService.createUser(body)
    }


    @UsePipes(new ValidationPipe())
    @Post('login')
    async login(@Body() {username, password}: AuthDto ) {
        const user = await this.authService.validateUser(username, password)
        return this.authService.login(user.username)
    }

}
