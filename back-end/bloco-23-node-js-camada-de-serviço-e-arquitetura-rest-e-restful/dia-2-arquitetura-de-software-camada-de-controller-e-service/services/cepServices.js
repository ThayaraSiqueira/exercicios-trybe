const cepModels = require('../models/cepModels');
const Joi = require('joi');
const { string } = require('joi');
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

    validateBody: (obj) => {
        const schema = Joi.object({
            "cep": Joi.string().required(),
            "logradouro": Joi.string().required(),
            "bairro": Joi.string().required(),
            "localidade": Joi.string().required(),
            "uf": Joi.string().min(2).max(2).required(),
        })
        const {err, value} = schema.validate(obj);
        if(err) throw err;

        return value;
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

    create: async (obj) => {
        await cepModels.create(obj);
    },
};

module.exports = cepService;