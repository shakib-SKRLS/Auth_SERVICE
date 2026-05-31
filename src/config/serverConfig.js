const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');

module.exports = {
  port: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
  SALT_ROUNDS: bcrypt.genSaltSync(10),
  DB_SYNC: process.env.DB_SYNC==="false" ? false : true, // Convert string to boolean
  // Add other server configurations here if needed
};