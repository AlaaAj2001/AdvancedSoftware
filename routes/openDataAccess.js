const express = require('express');
const router = express.Router();
const openDataAccessController = require('../controllers/openDataAccessController');

// Grant Data Access to Researcher
router.post('/open-data-access/grant', async (req, res) => {
  const { researcherId, dataId } = req.body;
  await openDataAccessController.grantDataAccess(researcherId, dataId);
  res.json({ message: 'Data access granted successfully' });
});

// Get Data Access for Researcher
router.get('/open-data-access/:researcherId', async (req, res) => {
  const researcherId = req.params.researcherId;
  const dataAccess = await openDataAccessController.getDataAccess(researcherId);
  res.json({ dataAccess });
});

// Revoke Data Access from Researcher
router.post('/open-data-access/revoke', async (req, res) => {
  const { researcherId, dataId } = req.body;
  await openDataAccessController.revokeDataAccess(researcherId, dataId);
  res.json({ message: 'Data access revoked successfully' });
});

module.exports = router;
