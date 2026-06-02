const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-controller');
const { AuthRequestValidators } = require('../../middlewares/index');

router.post('/signup', AuthRequestValidators.validateUserAuth, userController.create);
router.post('/signin', AuthRequestValidators.validateUserAuth, userController.signIn);
router.get('/isauthenticated', userController.isAuthenticated);
router.get('/isadmin', AuthRequestValidators.validateAdminRequest, userController.isAdmin);



module.exports = router;