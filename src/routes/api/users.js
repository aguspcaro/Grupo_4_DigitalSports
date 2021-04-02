const express = require('express');
const router = express.Router();

const usersControllers = require('../../controllers/api/usersControllers')

router.get('/users/suscribe', usersControllers.suscribe);
router.post('/users/suscribe', usersControllers.suscribe_post);

router.get('/users', usersControllers.list)

module.exports = router;