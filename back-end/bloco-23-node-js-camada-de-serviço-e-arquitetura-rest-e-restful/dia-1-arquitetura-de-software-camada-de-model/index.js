const express = require('express');
const Joi = require('joi');
require('express-async-errors');
const userModel = require('./models/userModel');

const app = express();

app.use(express.json());
const PORT = 3001;

const validateBody = (user) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    })
   const { error, value } = schema.validate(user);
   if (error) throw new Error(error.message);

   return value;
}

const validateId = (user) => {
    const schema = Joi.object({
        id: Joi.number().integer().required(),
    })
   const { error, value } = schema.validate(user);
   if (error) throw new Error(error.message);

   return value;
}

app.get('/', (_req,res) => {
    res.status(200).json({ message: 'oi'});
})

app.get('/user', async (_req,res) => {
    const users = await  userModel.findAll();
    res.status(200).json(users);
})

app.post('/user', async (req, res) => {
    const user = validateBody(req.body);
    const insertUser = await userModel.create(user);
    res.status(201).json(insertUser);
})

app.get('/user/:id', async (req,res) => {
    const { id } = validateId(req.params);
    const user = await userModel.findById(id);
    res.status(200).json(user);
})

app.put('/user/:id', async (req,res) => {
    const { id } = validateId(req.params);
    const user = validateBody(req.body);
    await userModel.checkIfExists(id);
    await userModel.update(id, user);
    res.status(200).json(user);
})

app.use((err, req, res, next) => {
    const { message } = err;

    res.status(404).json({ message });
})

app.listen(PORT, () => { console.log(`Running on ${PORT}`);});