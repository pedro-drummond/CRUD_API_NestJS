import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClienteDto {

    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsString()
    cpf: string;

    @IsString()
    idade: string;
}