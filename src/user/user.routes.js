const {Router} = require('express');
const router = Router();
//controller
const userController = require('./user.controller');

router.post('/user', userController.register);
router.get('/users/', userController.getAll);
router.get('/user', userController.getById);
router.put('/user', userController.updateUser);

module.exports = router;