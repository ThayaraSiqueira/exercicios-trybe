const express = require('express');
require('express-async-errors');

const app = express();
app.use(express.json());
const PORT = 3002;

app.get('/ping', (_req,res) => {
    res.status(200).json({ message: 'pong' });
})

app.use((err, req, res, next) => {
    const { message, code } = err;
    res.status(code).json({ message });
})

app.listen(PORT, () => { console.log(`Running on ${PORT}`);});