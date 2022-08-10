const db = require('./connection');

const cepModels = {
    checkIfExists: async (cep) => {
        const sql = 'SELECT * FROM ceps WHERE cep = ?';
        const [[result]] = await db.query(sql, [cep]);
        return result;

    },

    findByCep: async (cep ) => {
        const sql = 'SELECT * FROM ceps WHERE cep = ?';
        const [[result]] = await db.query(sql, [cep]);
        return result;
    },

    create: async (obj) => {
        const { cep, logradouro, bairro, localidade, uf } = obj;
        const sql = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
        const result = await db.query(sql, [ cep, logradouro, bairro, localidade, uf ]);
    },
};

module.exports = cepModels;