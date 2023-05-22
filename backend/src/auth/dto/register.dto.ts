import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';



export class RegisterDto {

    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    name?: string;

    @MinLength(6)
    password: string;

    @IsOptional()
    @IsString()
    address?: string;

}