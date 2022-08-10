const cepServices = require("../services/cepServices");

const cepController = {
    findByCep: async (req, res) => {
        cepServices.validateCep(req.params.cep);
        await cepServices.checkIfExists(req.params.cep);
        const cep =  await cepServices.findByCep(req.params.cep);
        res.status(200).json(cep);
    },
};

module.exports = cepController;