const { Router } = require('express');

const {
  getUsers,
  addUser,
  login,
  getUserById,
  protectedRoute,
} = require('../controllers/user.controller');

const router = Router();

router.route('/login').post(login);
router.route('/register').post(addUser);
router.route('/protected').post(protectedRoute);
router.route('/:id').get(getUserById);
router.route('/').get(getUsers);

module.exports = router;
