const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./auth')

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);


router.use('/api', (req, res) => res.status(404).json('No route for this path'));
router.use('/auth', (req, res) => res.status(404).json('No route for this path'));

module.exports = router;