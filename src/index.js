const express = require('express');
const app = express();
const { port } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const prepareAndStartServer = async () => {
  try {
    // Perform any necessary preparations here (e.g., database connection, middleware setup)
    app.use('/api', apiRoutes);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

prepareAndStartServer();