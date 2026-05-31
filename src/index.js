const express = require('express');
const app = express();
const { port, DB_SYNC } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');
const db = require('./models/index');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const prepareAndStartServer = async () => {
  try {
    // Perform any necessary preparations here (e.g., database connection, middleware setup)
    app.use('/api', apiRoutes);
    app.listen(port, async () => {
      if (DB_SYNC) {
        db.sequelize.sync({ alter: true });
      }



      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

prepareAndStartServer();