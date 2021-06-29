const express = require('express');
const dotenv = require('dotenv');

const userRoutes = require('./routes/user.routes');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/v1/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
