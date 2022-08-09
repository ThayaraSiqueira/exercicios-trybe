const express = require('express');
const Joi = require('joi');
// const rescue = require('express-rescue');
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

app.get('/', (_req,res) => {
    res.status(200).json({ message: 'oi'});
})

app.post('/user', async (req, res) => {
    const user = validateBody(req.body);
    const insertUser = await userModel.create(user);
    res.status(201).json(insertUser);
})

app.listen(PORT, () => { console.log(`Running on ${PORT}`);});