import { Injectable } from '@nestjs/common';
import { ClienteService } from 'src/cliente/cliente.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private clienteService: ClienteService) {
        
    }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.clienteService.findUserByUsername(username);
        if (user && bcrypt.compareSync(password, user.password)) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }
    
}
