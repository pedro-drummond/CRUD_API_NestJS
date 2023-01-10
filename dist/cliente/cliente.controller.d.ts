import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    create(createClienteDto: CreateClienteDto): Promise<CreateClienteDto & import("./entities/cliente.entity").Cliente>;
    findAll(): Promise<import("./entities/cliente.entity").Cliente[]>;
    findOne(id: number): Promise<{
        password: any;
        id: number;
        username: string;
        email: string;
        cpf: string;
        idade: string;
    }>;
    update(id: number, updateClienteDto: UpdateClienteDto): Promise<void>;
    login(req: any): Promise<any>;
}
