// routes/reportRoutes.js

const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/reports', reportController.getAllReports);
router.get('/reports/:reportId', reportController.getReportById);
router.post('/reports', reportController.createReport);
router.put('/reports/:reportId', reportController.updateReport);
router.delete('/reports/:reportId', reportController.deleteReport);

module.exports = router;
