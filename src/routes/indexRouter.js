const Router = require('express')
const {
    AdicionaNovaReceitaController,
    verificaReceitasController,
    alteraReceitaController,
    verificaUmaReceitaController,
    deletaUmaReceitaController
} = require('../controller/indexController')

const router = Router()

router.get('/verificaTodasReceitas', verificaReceitasController)
router.get('/verificaUmaReceita/:id', verificaUmaReceitaController)
router.post('/adicionaNovaReceita', AdicionaNovaReceitaController)
router.put('/alteraReceitas/:id', alteraReceitaController)
router.delete('/deletaUmaReceita/:id', deletaUmaReceitaController)

module.exports = router