import { Controller, Get, Post, Body, Res, Req } from "@nestjs/common";
import { Response, Request } from "express";
import { LoginWithEmail, LoginWithUsername, CreationUser } from "./dto/auth.dto";
import { AuthService } from "./auth.service";
import { User } from "src/user/user.entity";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    async signup(@Body() body: CreationUser, @Res() res: Response)
    {
        res.status(201).json(await this.authService.createUser(body)).redirect('/home');
    }

    @Post('login')
    async login(@Body() body: LoginWithEmail | LoginWithUsername, @Res() res: Response)
    {
        if ('email' in body) {
            return await this.authService.loginWithEmail(body).then(() => res.redirect('/home'));
        }
        else {
            return await this.authService.loginWithUsername(body).then(() => res.redirect('/home'));
        }
    }

    @Get('logout')
    async logout(@Req() req: Request, @Res() res: Response)
    {
        // this.authService.logout((req.user as User).id);
    }


}