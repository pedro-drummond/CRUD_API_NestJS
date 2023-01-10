import { ClienteService } from 'src/cliente/cliente.service';
export declare class AuthService {
    private clienteService;
    constructor(clienteService: ClienteService);
    validateUser(username: string, password: string): Promise<any>;
}
