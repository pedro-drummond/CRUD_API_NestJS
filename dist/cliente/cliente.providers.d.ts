import { DataSource } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
export declare const clienteProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Cliente>;
    inject: string[];
}[];
