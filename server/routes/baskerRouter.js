const Router = require('express')
const basketController = require('../controllers/basketController')
const router = new Router()

router.put('/:id', basketController.addDevice)
router.get('/:id', basketController.getOne)

module.exports = router