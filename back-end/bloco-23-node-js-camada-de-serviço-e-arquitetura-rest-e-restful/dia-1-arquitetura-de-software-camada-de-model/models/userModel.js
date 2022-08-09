const db = require('./connection');

const userModel = {
    create: async (user) => {
        const { firstName, lastName, email, password } = user;
        const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)'
        const query = await db.query(sql, [firstName, lastName, email, password]);
        return query;
    },

    findAll: async () => {
        const sql = 'SELECT * FROM users';
        const [users] = await db.query(sql);
        return users;
    }
};

module.exports = userModel;