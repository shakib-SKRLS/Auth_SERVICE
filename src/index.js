const express = require('express');
const app = express();
const { port } = require('./config/serverConfig');


const prepareAndStartServer = async () => {
  try {
    // Perform any necessary preparations here (e.g., database connection, middleware setup)
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

prepareAndStartServer();