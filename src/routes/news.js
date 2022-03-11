const express = require('express')
const router = express.Router()

const newController = require('../app/controllers/NewController')

router.use('/:slug', newController.show)
router.use('/', newController.index) // cái này luôn nằm dưới cùng, vì route nó đọc từ trên xuống

module.exports = router