const express = require('express');
const router  = express.Router();

const usersController = require('../controllers/users');

router.route('/login').post(usersController.login)
router.route('/').get(usersController.getUsers).post(usersController.createUser);
router.route('/:id').delete(usersController.deleteUser).put(usersController.updateUser).get(usersController.getOneUser);



module.exports = router;
