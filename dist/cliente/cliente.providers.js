"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteProviders = void 0;
const cliente_entity_1 = require("./entities/cliente.entity");
exports.clienteProviders = [
    {
        provide: 'CLIENTE_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(cliente_entity_1.Cliente),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=cliente.providers.js.map