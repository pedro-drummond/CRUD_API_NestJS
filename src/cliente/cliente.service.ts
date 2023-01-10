import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClienteService {

  constructor(
    @Inject('CLIENTE_REPOSITORY')
    private clienteRepository: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClienteDto) {
    createClienteDto.password = bcrypt.hashSync(createClienteDto.password, 10);
    return this.clienteRepository.save(createClienteDto);
  }

  async findAll() {
    const users = await this.clienteRepository.find();
    return users;
  }

  async findOne1(id: number) {
    const user = await this.clienteRepository.findOneBy({id});
    
    return {
      ...user,
      password: undefined,
    }
  }
  async findUserByUsername(username: string): Promise<Cliente | null> {
    const user = await this.clienteRepository.findOne({
      where: { username }
    });
  
    if (user) {
      return user;
    }
  
    return null;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const user = await this.clienteRepository.findOneBy({id})

    if (!user){throw new NotFoundException('Usuário não encontrado');
    }
    updateClienteDto.password = bcrypt.hashSync(updateClienteDto.password, 10);
    await this.clienteRepository.update(id, updateClienteDto);
  }

}
