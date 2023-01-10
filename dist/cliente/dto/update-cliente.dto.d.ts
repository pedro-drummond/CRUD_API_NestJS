import { CreateClienteDto } from './create-cliente.dto';
declare const UpdateClienteDto_base: import("@nestjs/common").Type<Partial<CreateClienteDto>>;
export declare class UpdateClienteDto extends UpdateClienteDto_base {
    username: string;
    email: string;
    password: string;
    cpf: string;
    idade: string;
}
export {};
