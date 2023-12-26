const express = require('express');
const router = express.Router();
const environmentalDataController = require('../controllers/environmentalDataController');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, 'yourSecretKey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        // If token is valid, proceed to the next middleware/route handler
        next();
    });
};

router.post('/add', verifyToken, environmentalDataController.addEnvironmentalData);
router.get('/byDataType/:data_type', environmentalDataController.getDataByDataType);
router.get('/byLocation/:location', environmentalDataController.getDataByLocation);

module.exports = router;
