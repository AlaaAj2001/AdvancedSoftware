const educationalResourcesModel = require('../models/educationalResourcesModel');

const getAllResources = async () => educationalResourcesModel.getAllResources();

const getResourceById = async (resourceId) => educationalResourcesModel.getResourceById(resourceId);

const createResource = async (resource) => educationalResourcesModel.createResource(resource);

const updateResource = async (resourceId, data) => educationalResourcesModel.updateResource(resourceId, data);

const deleteResource = async (resourceId) => educationalResourcesModel.deleteResource(resourceId);

module.exports = {
  getAllResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
};
