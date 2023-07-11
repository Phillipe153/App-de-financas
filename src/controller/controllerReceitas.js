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
	const verificaUmaReceitaController= async (req, res, next) => {
		try {
			const { id } = req.params
			const {status, message} = await Services.verificaUmaReceitaService(id);
			return res.status(status).json(message);
		} catch (error) {
		next(error);
		}
	}

	const alteraReceitaController= async (req, res, next) => {
		try {

			const { id } = req.params
			console.log(id);
			const { fonte , valor} = req.body;
			const {status, message} = await Services.alteraReceitasService(id, fonte , valor);
			return res.status(status).json(message);
		} catch (error) {
		next(error);
		}
	}

	const deletaUmaReceitaController= async (req, res, next) => {
		try {

			const { id } = req.params
			console.log(id);
			const {status, message} = await Services.deletaUmaReceitaService(id);
			return res.status(status).json(message);
		} catch (error) {
		next(error);
		}
	}

	module.exports = {
		AdicionaNovaReceitaController, 
		verificaReceitasController, 
		alteraReceitaController, 
		verificaUmaReceitaController,
		deletaUmaReceitaController};