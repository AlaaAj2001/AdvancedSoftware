// controllers/reportController.js

const reportModel = require('../models/reportModel');

const getAllReports = async (req, res) => {
  try {
    const reports = await reportModel.getAllReports();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getReportById = async (req, res) => {
  const reportId = req.params.reportId;
  try {
    const report = await reportModel.getReportById(reportId);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createReport = async (req, res) => {
  const newReport = req.body;
  try {
    const report = await reportModel.createReport(newReport);
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateReport = async (req, res) => {
  const reportId = req.params.reportId;
  const updatedData = req.body;
  try {
    const report = await reportModel.updateReport(reportId, updatedData);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteReport = async (req, res) => {
  const reportId = req.params.reportId;
  try {
    await reportModel.deleteReport(reportId);
    res.json({ message: 'Report deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
};
