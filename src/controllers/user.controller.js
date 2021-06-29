const {
  createUser,
  getAllUsers,
  getOneUserById,
  getOneUserByUsername,
  checkPass,
} = require('../models/user');
const { generateToken, validateToken } = require('../utils/token');

async function getUsers(req, res) {
  const users = await getAllUsers();
  res.json(users);
}

async function getUserById(req, res) {
  const user = await getOneUserById(req.params.id);
  console.log(user);
  res.json(user);
}

async function addUser(req, res) {
  const { username, email, password } = req.body;
  const user = await createUser(username, email, password);
  const payload = {
    id: user.id,
    username: user.username,
  };
  const token = generateToken(payload);
  const response = {
    ...payload,
    token: token,
  };
  res.json(response);
}

async function login(req, res) {
  const user = await getOneUserByUsername(req.body.username);

  if (user) {
    const result = await checkPass(req.body.password, user.password);
    if (result) {
      const payload = {
        id: user.id,
        username: user.username,
      };
      const token = generateToken(payload);
      const response = {
        ...payload,
        token: token,
      };
      res.json(response);
    }
  }

  res.status(401).json({ error: 'Wrong username or password' });
}

function protectedRoute(req, res) {
  const data = {
    ...req.user,
    message: 'Congratulations! You successfully logged in :D',
  };
  res.json(data);
}

module.exports = { getUsers, addUser, login, getUserById, protectedRoute };
