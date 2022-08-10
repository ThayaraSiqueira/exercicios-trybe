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
    },

    findById: async (id) => {
        const sql = 'SELECT * FROM users WHERE id = ?';
        const [[user]] = await db.query(sql, [id]);
        return user;
    },

    update: async (id, user) => {
        const { firstName, lastName, email, password } = user;
        const sql = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';
        const [editedUser] = await db.query(sql, [firstName, lastName, email, password, id]);
        return editedUser;
    },

    checkIfExists: async (id) => {
        const sql = 'SELECT * FROM users WHERE id = ?';
        const [[user]] = await db.query(sql, [id]);
        if (!user) throw new Error('User not found');
    },
};

module.exports = userModel;