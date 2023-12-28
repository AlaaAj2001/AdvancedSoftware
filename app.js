const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const axios = require('axios'); 

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log('Received request with body:', req.body);
  next();
});

// Define error handling middleware
const handleErrors = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message }); 
};

// Mount environmental data routes
const environmentalDataRoutes = require('./routes/environmentalDataRoutes');
app.use('/api/environmentaldata', environmentalDataRoutes);

// Mount user routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Mount sustainability score routes
const sustainabilityScoreRoutes = require('./routes/sustainabilityScoreRoutes');
app.use('/api/scores', sustainabilityScoreRoutes);

// Mount educational resources routes
const educationalResourcesRoutes = require('./routes/educationalResourcesRoutes');
app.use('/api/educational-resources', educationalResourcesRoutes);

// Mount alert routes
const alertRoutes = require('./routes/alertRoutes');
app.use('/api/alert-Routes', alertRoutes);

// Mount report routes
const reportRoutes = require('./routes/reportRoutes');
app.use('/api/report-Routes', reportRoutes);

// Mount user profile routes
const userProfileRoutes = require('./routes/userProfileRoutes');
app.use('/api/profile', userProfileRoutes);

// Define /api/weather route
app.get('/api/weather', async (req, res) => {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: 'Palestine, PS',
        appid: '17466be83e6366675f3ad4fca5f91a01', 
        units: 'metric',
      },
    });
    const weatherData = response.data;
    

    res.json(weatherData);
  } catch (error) {
  console.error('Axios Error:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}

});

// Error handling middleware
app.use(handleErrors);

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
