import { IsEmail, IsString, IsNotEmpty, IsStrongPassword } from "class-validator";

export class LoginWithEmail
{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}

export class LoginWithUsername
{
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}

export class CreationUser
{
    @IsNotEmpty()
    @IsString()
    username: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}