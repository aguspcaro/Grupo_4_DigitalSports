const express = require('express');
const router = express.Router();

const usersControllers = require('../../controllers/api/usersControllers')

router.get('/users', usersControllers.suscribe);
router.post('/users', usersControllers.suscribe_post);

module.exports = router;