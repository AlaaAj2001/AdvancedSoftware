// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Adjust the path
const environmentalDataRoutes = require('./routes/environmentalDataRoutes'); // Adjust the path
const alertsRoutes = require('./routes/alertsRoutes'); // Adjust the path

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to EcoTrack API!');
});

// Use user, environmentalData, and alerts routes
app.use('/users', userRoutes);
app.use('/environmentalData', environmentalDataRoutes);
app.use('/alerts', alertsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
