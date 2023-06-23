import { Controller, Get, Post, Body, Res, Req, UseGuards } from "@nestjs/common";
import { Response, Request } from "express";
import { LoginWithEmail, LoginWithUsername, CreationUser } from "./dto/auth.dto";
import { AuthService } from "./auth.service";
import { Public } from "./decorators/public.decoration";
import { User } from "src/user/user.entity";
import { RefreshTokenGuard } from "./guard/refresh.guard";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Public()
    @Post('signup')
    async signup(@Body() body: CreationUser)
    {
        return await this.authService.createUser(body);
    }

    @Public()
    @Post('login')
    async login(@Body() body: LoginWithEmail | LoginWithUsername, @Res() res: Response)
    {
        if ('email' in body) {
            await this.authService.loginWithEmail(body).then((data) => { res.status(200).json(data); });
        }
        else {
            await this.authService.loginWithUsername(body).then((data) => { res.status(200).json(data); });
        }
    }

    @Get('logout')
    async logout(@Req() req: Request)
    {
        this.authService.logout((req.user as User).id);
    }

    @Public()
    @UseGuards(RefreshTokenGuard)
    @Get('refresh')
    async refresh(@Req() req: Request, @Res() res: Response)
    {
        const userId = req.user['sub'];
        const refreshToken = req.user['refreshToken'];
        return await this.authService.refreshToken(userId, refreshToken).then((data) => { res.status(200).json(data); });
    }


}