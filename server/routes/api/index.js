const router = require('express').Router();
const articleRoutes = require('./articles');
const userRoutes = require('./user');
const jobListings = require('./jobs');

router.use('/articles', articleRoutes);
router.use('/users', userRoutes);
router.use('/jobs', jobListings);


module.exports = router;