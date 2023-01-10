import { PartialType } from '@nestjs/swagger';
import { CreateClienteDto } from './create-cliente.dto';
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { isNumber } from 'util';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {

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
