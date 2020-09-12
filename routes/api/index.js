const router = require('express').Router();
const articleRoutes = require('./articles');
const userRoutes = require('./user');
const jobListings = require('./jobs');
const chart = require('./chart');

router.use('/articles', articleRoutes);
router.use('/users', userRoutes);
router.use('/jobs', jobListings);
router.use('/chart', chart);

module.exports = router;
