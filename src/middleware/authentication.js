const jwt = require('jsonwebtoken');
const { validateToken } = require('../utils/token');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const data = validateToken(token);

      if (data.error) {
        res.status(401).json(data);
      }

      req.user = data;
      next();
    } catch (err) {
      res.status(401).json({ error: 'Not authorized' });
    }
  }

  if (!token) {
    res.status(401).json({ error: 'Not authorized' });
  }
};

module.exports = { protect };
