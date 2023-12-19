const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Other middleware and configurations can go here

// Mount user routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Mount sustainability score routes
const sustainabilityScoreRoutes = require('./routes/sustainabilityScoreRoutes');
app.use('/api/sustainability-score', sustainabilityScoreRoutes);

// Mount educational resources routes
const educationalResourcesRoutes = require('./routes/educationalResourcesRoutes');
app.use('/api/educational-resources', educationalResourcesRoutes);

// Mount open data access routes
const openDataAccessRoutes = require('./routes/openDataAccessRoutes');
app.use('/api/open-data-access', openDataAccessRoutes);

// Error handling middleware
app.use(handleErrors);

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
