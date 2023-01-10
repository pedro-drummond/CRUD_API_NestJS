import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
export declare class ClienteService {
    private clienteRepository;
    constructor(clienteRepository: Repository<Cliente>);
    create(createClienteDto: CreateClienteDto): Promise<CreateClienteDto & Cliente>;
    findAll(): Promise<Cliente[]>;
    findOne1(id: number): Promise<{
        password: any;
        id: number;
        username: string;
        email: string;
        cpf: string;
        idade: string;
    }>;
    findUserByUsername(username: string): Promise<Cliente | null>;
    update(id: number, updateClienteDto: UpdateClienteDto): Promise<void>;
}
