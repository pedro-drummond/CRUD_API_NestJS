import { Controller, Get, Post, Body, Request, UseGuards, Put, Param, ParseIntPipe, NotFoundException, Patch } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';



@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}
  //criar usuario
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }
  //listar todos
  @Get()
  findAll() {
    return this.clienteService.findAll();
  }
  //pegar pelo id
  @Get(':id')
  findOne(@Param('id') id:number){
    const user =  this.clienteService.findOne1(id);
    if(!user){
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }
  //update
  @Put(':id')
  update(@Param('id') id:number, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(id, updateClienteDto);
  }
  //login
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}

