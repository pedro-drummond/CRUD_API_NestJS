import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
@PrimaryGeneratedColumn()
id: number;
//criando as colunas do bd
@Column({ unique: true, nullable: false })
username: string;

@Column({ })
email: string;

@Column({ })
password: string;

@Column({ })
cpf:string;

@Column({ })
idade:string;
}

