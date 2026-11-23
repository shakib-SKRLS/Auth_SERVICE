const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not set. Add it to .env (see .env.example).');
}

module.exports = {
  port: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
  SALT_ROUNDS: bcrypt.genSaltSync(10),
  DB_SYNC: process.env.DB_SYNC === "true", // only sync models when explicitly enabled
};
