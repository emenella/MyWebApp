import { Injectable, Inject, forwardRef, HttpException, HttpStatus } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";
import { LoginWithEmail, LoginWithUsername, CreationUser } from "./dto/auth.dto";
import  * as bcrypt from 'bcrypt';
import { JwtSecret } from "./auth.constants";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, @Inject(forwardRef(() => UserService)) private readonly userService: UserService) {}

    async validateUser(userId: number): Promise<User> {
        return this.userService.findById(userId);
    }

    async loginWithEmail(loginWithEmail: LoginWithEmail): Promise<{access_token: string, refresh_token: string}> {
        const user = await this.userService.findByEmail(loginWithEmail.email);
        if (user) {
            const isMatch = await bcrypt.compare(loginWithEmail.password, user.password);
            if (isMatch) {
                return await this.generateJwtTokens(user.id, user.username);
            }
            else {
                throw new HttpException('Wrong username or login', HttpStatus.BAD_REQUEST);
            }
        }
        else {
            throw new HttpException('Wrong username or login', HttpStatus.UNAUTHORIZED);
        }
    }

    async loginWithUsername(loginWithUsername: LoginWithUsername): Promise<{access_token: string, refresh_token: string}> {
        const user = await this.userService.findByUsername(loginWithUsername.username);
        if (user) {
            const isMatch = await bcrypt.compare(loginWithUsername.password, user.password);
            if (isMatch) {
                return await this.generateJwtTokens(user.id, user.username);
            }
            else {
                throw new HttpException('Wrong username or login', HttpStatus.BAD_REQUEST);
            }
        }
        else {
            throw new HttpException('Wrong username or login', HttpStatus.UNAUTHORIZED);
        }
    }

    async logout(userId: number): Promise<User> {
        return this.userService.update(userId, { refresh_token: null });
    }

    async createUser(creationUser: CreationUser): Promise<{access_token: string; refresh_token: string}> {
        try {
            let newUser = new User(creationUser.username, creationUser.email, bcrypt.hashSync(creationUser.password, 10));
            newUser = await this.userService.create(newUser);
            return await this.generateJwtTokens(newUser.id, newUser.username);
        }
        catch (e) {
            if (e.code === '23505') {
                throw new HttpException('Email or username already used', HttpStatus.BAD_REQUEST);
            }
        }
    }


    async generateJwtTokens(userId: number, username: string): Promise<{access_token: string, refresh_token: string}> {
        const [access_token, refresh_token] = await Promise.all([
            this.jwtService.signAsync({ sub: userId, username }, { expiresIn: '15m', secret: JwtSecret.access_token }),
            this.jwtService.signAsync({ sub: userId, username }, { expiresIn: '7d', secret: JwtSecret.refresh_token }),
        ]);
        this.updateRefreshToken(userId, refresh_token);
        return { access_token, refresh_token };
    }

    async updateRefreshToken(userId: number, refresh_token: string): Promise<User> {
        const encryptedRefreshToken = bcrypt.hashSync(refresh_token, 10);
        return this.userService.update(userId, { refresh_token: encryptedRefreshToken });
    }
}