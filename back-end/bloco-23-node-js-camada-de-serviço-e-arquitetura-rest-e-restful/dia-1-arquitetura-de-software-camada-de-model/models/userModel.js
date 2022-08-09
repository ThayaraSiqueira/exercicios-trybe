const db = require('./connection');

const userModel = {
    create: async (user) => {
        const { firstName, lastName, email, password } = user;
        const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)'
        const query = await db.query(sql, [firstName, lastName, email, password]);
        return query;
    }
};

module.exports = userModel;