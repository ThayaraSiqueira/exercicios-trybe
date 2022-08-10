const cepModels = require('../models/cepModels');

const cepService = {
    validateCep: (cep) => {
        const regex = /^\d{5}-?\d{3}$/;
        if (!regex.test(cep)) {
            const err = new Error('CEP inválido');
            err.code = 'Invalid data';
            err.status = 400;
            throw err;
        }
    },
    checkIfExists: async (cep) => {
        const result = await cepModels.checkIfExists(cep);
        if (!result) {
            const err = 'CEP não encontrado';
            err.code = 'not found';
            err.status= 404;
            throw err;
        }
        return result;
    },

    findByCep: async (cep) => {
        const result = await cepModels.findByCep(cep);
        return result;
    },
};

module.exports = cepService;