const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index); // cái này luôn nằm dưới cùng, vì route nó đọc từ trên xuống.

module.exports = router;
