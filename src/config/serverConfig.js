const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  // Add other server configurations here if needed
};