const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./auth')

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);

router.use('/api', (req, res) => res.status(404).json('No route for this path'));
router.use('/auth', (req, res) => res.status(404).json('No route for this path'));


// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });


module.exports = router;