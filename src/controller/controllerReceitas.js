const Services = require('../service/indexService');

	const AdicionaNovaReceitaController= async (req, res, next) => {
		try {

            const { fonte , valor} = req.body;
			const {status, message} = await Services.adicionaNovaReceitaService(fonte ,valor);
			return res.status(status).json( message );
		} catch (error) {
		next(error);
		}
	}

	const verificaReceitasController= async (req, res, next) => {
		try {
			const response = await Services.verificaReceitasService();
			return res.status(201).json(response);
		} catch (error) {
		next(error);
		}
	}

	module.exports = {AdicionaNovaReceitaController, verificaReceitasController};