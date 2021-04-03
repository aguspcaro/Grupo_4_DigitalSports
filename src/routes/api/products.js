const express = require('express');
const router = express.Router();

const productsControllers = require('../../controllers/api/productsControllers')

router.get('/', productsControllers.list)


module.exports = router;