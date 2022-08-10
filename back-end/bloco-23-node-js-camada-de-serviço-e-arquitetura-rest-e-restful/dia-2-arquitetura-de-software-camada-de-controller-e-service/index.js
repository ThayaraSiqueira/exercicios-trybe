const express = require('express');
require('express-async-errors');
const cepRouter = require('./router/cepRouter');

const app = express();
app.use(express.json());
const PORT = 3002;

app.get('/ping', (_req,res) => {
    res.status(200).json({ message: 'pong' });
})

app.use('/cep', cepRouter);

app.use((err, req, res, next) => {
    const { message, code, status } = err;
    res.status(status).json({ error: code, message });
})

app.listen(PORT, () => { console.log(`Running on ${PORT}`);});