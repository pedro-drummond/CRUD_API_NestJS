"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
let ClienteService = class ClienteService {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    create(createClienteDto) {
        createClienteDto.password = bcrypt.hashSync(createClienteDto.password, 10);
        return this.clienteRepository.save(createClienteDto);
    }
    async findAll() {
        const users = await this.clienteRepository.find();
        return users;
    }
    async findOne1(id) {
        const user = await this.clienteRepository.findOneBy({ id });
        return Object.assign(Object.assign({}, user), { password: undefined });
    }
    async findUserByUsername(username) {
        const user = await this.clienteRepository.findOne({
            where: { username }
        });
        if (user) {
            return user;
        }
        return null;
    }
    async update(id, updateClienteDto) {
        const user = await this.clienteRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        updateClienteDto.password = bcrypt.hashSync(updateClienteDto.password, 10);
        await this.clienteRepository.update(id, updateClienteDto);
    }
};
ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CLIENTE_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map