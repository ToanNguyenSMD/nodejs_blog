const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewController');

router.get('/:slug', newController.show);
router.get('/', newController.index); // cái này luôn nằm dưới cùng, vì route nó đọc từ trên xuống

module.exports = router;
