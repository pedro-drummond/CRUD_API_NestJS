import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ClienteModule } from 'src/cliente/cliente.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [ClienteModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
