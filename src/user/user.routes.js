const {Router} = require('express');
const router = Router();
//controller
const userController = require('./user.controller');

router.post('/user', userController.register);

module.exports = router;