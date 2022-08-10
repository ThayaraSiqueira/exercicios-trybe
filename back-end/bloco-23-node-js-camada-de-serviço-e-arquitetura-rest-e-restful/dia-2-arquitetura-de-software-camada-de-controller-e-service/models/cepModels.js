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
};

module.exports = cepModels;