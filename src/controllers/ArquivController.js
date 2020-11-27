const Listas = require('../models/Listas');

module.exports = {
    async index(req, res) {
        const Listas = await Listas.findAll();

        return res.json(Listas);
    },

    async store(req, res) {
        const { lista , status} = req.body;

        const Listas = await Listas.create({  lista , status });

        return res.json(Listas);
    }
};

module.exports = new  ArquivController();

