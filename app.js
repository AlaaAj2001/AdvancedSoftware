// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const knex = require("./knexfile"); // Assuming database.js is in the same directory
const bodyParser = require('body-parser'); // Add this line

// app.js or main server file

// ... (existing code)

// Define error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error
  res.status(500).json({ error: 'Internal Server Error' });
});


// Middleware
app.use(bodyParser.json()); // Add this line to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Add this line to parse URL-encoded bodies
app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});


// Define error handling middleware
const handleErrors = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
};

// Mount user routes
const userRoutes = require("./routes/userRoutes");
app.use('/api/users', userRoutes);

// Mount sustainability score routes
const sustainabilityScoreRoutes = require("./routes/sustainabilityScore");
app.use('/api/sustainability-score', sustainabilityScoreRoutes);

// Mount educational resources routes
const educationalResourcesRoutes = require("./routes/educationalResources");
app.use('/api/educational-resources', educationalResourcesRoutes);

// Mount open data access routes
const openDataAccessRoutes = require("./routes/openDataAccess");
app.use('/api/open-data-access', openDataAccessRoutes);

const alertRoutes = require("./routes/alertRoutes");
app.use('/api/alert-Routes', alertRoutes);


const reportRoutes = require("./routes/reportRoutes");
app.use('/api/report-Routes', reportRoutes);


// Error handling middleware
app.use(handleErrors);

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});