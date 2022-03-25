const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.use('/search', siteController.search)
router.use('/', siteController.index) // cái này luôn nằm dưới cùng, vì route nó đọc từ trên xuống.

module.exports = router