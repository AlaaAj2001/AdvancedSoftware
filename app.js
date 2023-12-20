// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const knex = require("./knexfile"); // Assuming database.js is in the same directory


// Middleware
app.use(express.json());

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

// const userRouter = require("./routes/userRouter");
// app.use("./routes/userRoutes", userRouter);

// Error handling middleware
app.use(handleErrors);

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

