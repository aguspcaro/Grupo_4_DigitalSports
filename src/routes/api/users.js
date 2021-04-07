const express = require('express');
const router = express.Router();

const usersControllers = require('../../controllers/api/usersControllers')

router.get('/', usersControllers.list)

router.get('/:id', usersControllers.detail)

router.get('/image/:id', usersControllers.image)


module.exports = router;