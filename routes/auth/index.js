const router = require('express').Router();
const localAuthRoutes = require('./localAuth');
const googleAuthRoutes = require('./googleAuth');

router.use('/', localAuthRoutes);
router.use('/', googleAuthRoutes);

module.exports = router;
