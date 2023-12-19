const openDataAccessModel = require('../models/openDataAccess');

const grantDataAccess = async (researcherId, dataId) => openDataAccessModel.grantDataAccess(researcherId, dataId);

const getDataAccess = async (researcherId) => openDataAccessModel.getDataAccess(researcherId);

const revokeDataAccess = async (researcherId, dataId) => openDataAccessModel.revokeDataAccess(researcherId, dataId);

module.exports = {
  grantDataAccess,
  getDataAccess,
  revokeDataAccess,
};
