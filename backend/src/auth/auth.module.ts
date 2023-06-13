import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { AccesStrategy } from "./strategy/acces.strategy";
import { RefreshStrategy } from "./strategy/refresh.strategy";

@Module({
    imports: [UserModule, JwtModule.register({})],
    providers: [AuthService, AccesStrategy, RefreshStrategy],
    exports: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}