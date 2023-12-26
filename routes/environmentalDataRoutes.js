// environmentalDataRoutes.js
const express = require('express');
const router = express.Router();
const environmentalDataController = require('../controllers/environmentalDataController');
const authMiddleware = require('../middlewares/authMiddleware'); 

// Middleware function to check if the user is logged in
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { 
        return next();
    }
    res.status(401).json({ message: 'You must log in to add data' });
};

router.post('/add', authMiddleware, environmentalDataController.addEnvironmentalData);
router.get('/byDataType/:data_type', environmentalDataController.getDataByDataType);
router.get('/byLocation/:location', environmentalDataController.getDataByLocation);

module.exports = router;
