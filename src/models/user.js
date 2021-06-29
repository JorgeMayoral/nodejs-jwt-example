const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const db = require('../config/db');

class User {
  id;
  username;
  email;
  password;

  constructor(username, email, password) {
    this.id = uuid.v4();
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

async function hashPass(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

async function checkPass(plainPass, hash) {
  const result = await bcrypt.compare(plainPass, hash);
  return result;
}

async function createUser(username, email, password) {
  const hashedPassword = await hashPass(password);

  const user = new User(username, email, hashedPassword);

  db.run(
    'INSERT INTO users(id, username, email, password) VALUES (?, ?, ?, ?)',
    [user.id, user.username, user.email, user.password],
    (err) => {
      if (err) {
        console.error(err.message);
      }
    },
  );

  return user;
}

function getAllUsers() {
  return new Promise((resolve, reject) => {
    const users = [];
    const sql = 'SELECT * FROM users';
    db.each(
      sql,
      (err, row) => {
        if (err) {
          reject(err);
        } else {
          users.push(row);
        }
      },
      (err, _) => {
        if (err) {
          reject(err);
        } else {
          resolve(users);
        }
      },
    );
  });
}

function getOneUserById(id) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM users WHERE id=?';
    db.get(sql, [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

function getOneUserByUsername(username) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM users WHERE username=?';
    db.get(sql, [username], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

module.exports = {
  createUser,
  getAllUsers,
  getOneUserById,
  getOneUserByUsername,
  checkPass,
};
