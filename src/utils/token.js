const jwt = require('jsonwebtoken');

function generateToken(user) {
  const secret = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(user, secret);
  return token;
}

function validateToken(token) {
  const secret = process.env.JWT_SECRET_KEY;
  let data = {};
  try {
    data = jwt.verify(token, secret);
  } catch (err) {
    data = { error: err };
  }

  return data;
}

module.exports = { generateToken, validateToken };
