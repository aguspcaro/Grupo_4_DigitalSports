const express = require('express');
const router = express.Router();

const productsControllers = require('../../controllers/api/productsControllers')

router.get('/', productsControllers.list)
router.get("/:id", productsControllers.detail)

module.exports = router;