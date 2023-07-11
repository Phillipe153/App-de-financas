const Router = require('express')
const {
    AdicionaNovaReceitaController,
    verificaReceitasController,
} = require('../controller/indexController')

const router = Router()

router.get('/verificaReceitas', verificaReceitasController)
router.post('/adicionaNovaReceita', AdicionaNovaReceitaController)

module.exports = router