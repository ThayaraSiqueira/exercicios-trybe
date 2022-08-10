const { Router } = require('express');
const cepController = require('../controllers/cepControllers');

const cepRouter = Router();

cepRouter.get('/:cep', cepController.findByCep, () => {});

module.exports = cepRouter;