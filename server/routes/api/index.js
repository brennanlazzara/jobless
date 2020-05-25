const router = require('express').Router();
const articleRoutes = require('./articles');
const userRoutes = require('./user');

router.use('/articles', articleRoutes);
router.use('/users', userRoutes);

module.exports = router;