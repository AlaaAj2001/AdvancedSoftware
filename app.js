// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const knex = require("./knexfile"); 
const bodyParser = require('body-parser'); 



// Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});

// Define error handling middleware
const handleErrors = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
};

const environmentalDataRoutes = require('./routes/environmentalDataRoutes');
app.use(express.json());
app.use('/api/environmentaldata', environmentalDataRoutes);

// Mount user routes
const userRoutes = require("./routes/userRoutes");
app.use('/api/users', userRoutes);

// Mount sustainability score routes
const sustainabilityScoreRoutes = require("./routes/sustainabilityScoreRoutes");
app.use('/api/sustainability-score', sustainabilityScoreRoutes);

// Mount educational resources routes
const educationalResourcesRoutes = require("./routes/educationalResourcesRoutes");
app.use('/api/educational-resources', educationalResourcesRoutes);

// Mount open data access routes
const openDataAccessRoutes = require("./routes/openDataAccessRoutes");
app.use('/api/open-data-access', openDataAccessRoutes);

const alertRoutes = require("./routes/alertRoutes");
app.use('/api/alert-Routes', alertRoutes);

const userProfileRoutes = require('./routes/userProfileRoutes');
app.use('/api/users', userProfileRoutes);

const reportRoutes = require("./routes/reportRoutes");
app.use('/api/report-Routes', reportRoutes);

// const userProfileRoutes = require('./routes/userProfileRoutes');
// app.use('/api', userProfileRoutes);

// Use the authentication routes

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

const messageRoutes = require('./routes/messageRoutes');
app.use('/api/messages', messageRoutes); 


// Error handling middleware
app.use(handleErrors);

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);});
