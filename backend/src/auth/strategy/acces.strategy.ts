import { ExtractJwt, Strategy, } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { JwtSecret } from "../auth.constants";

@Injectable()
export class AccesStrategy extends PassportStrategy(Strategy, "jwt-access") {
    constructor(private readonly usersService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JwtSecret.access_token,
        });
    }

    async validate(payload: { sub :number, username: string }) {
        return await this.usersService.findById(payload.sub);
    }
}