const express = require('express');
const router = express.Router();
const educationalResourcesController = require('../controllers/educationalResourcesController');

// Get All Educational Resources
router.get('/', async (req, res) => {
  const resources = await educationalResourcesController.getAllResources();
  res.json({ resources });
});

// Get Educational Resource by ID
router.get('/:resourceId', async (req, res) => {
  const resourceId = req.params.resourceId;
  const resource = await educationalResourcesController.getResourceById(resourceId);
  res.json({ resource });
});

// Create Educational Resource
router.post('/', async (req, res) => {
  const newResource = req.body;

  // Log the received request body
  console.log('Received request body:', newResource);

  const resource = await educationalResourcesController.createResource(newResource);
  res.json({ resource });
});

// Update Educational Resource
router.put('/:resourceId', async (req, res) => {
  const resourceId = req.params.resourceId;
  const updatedData = req.body;
  const resource = await educationalResourcesController.updateResource(resourceId, updatedData);
  res.json({ resource });
});

// Delete Educational Resource
router.delete('/:resourceId', async (req, res) => {
  const resourceId = req.params.resourceId;
  await educationalResourcesController.deleteResource(resourceId);
  res.json({ message: 'Educational resource deleted successfully' });
});

module.exports = router;
