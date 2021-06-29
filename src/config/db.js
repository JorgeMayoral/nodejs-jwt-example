const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./data/data.db', (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log('Connected to database');
});

db.run(
  'CREATE TABLE IF NOT EXISTS users(id text PRIMARY KEY, username text, email text, password text)',
  (err) => {
    if (err) {
      console.error(err.message);
      process.exit(1);
    }
  },
);

module.exports = db;
