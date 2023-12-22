const express = require('express');
const router = express.Router();
const UserProfileController = require('../controllers/userProfileController');

router.post('/profiles', UserProfileController.createProfile);
router.put('/profiles/:userID', UserProfileController.updateProfile);
router.get('/profiles/:userID', UserProfileController.getProfileByUserID);
router.get('/profiles/:userID/similar-interests', UserProfileController.getUsersBySimilarInterests);
router.get('/profiles/:userID/same-location', UserProfileController.getUsersByLocation);

module.exports = router;
