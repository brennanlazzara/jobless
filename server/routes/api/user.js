const router = require('express').Router();
const User = require('../../models/User');
const requireJwtAuth = require("../../middleware/requireJwtAuth");

router.get('/me', requireJwtAuth, (req, res) => {
    const me = req.user.toJSON();
    console.log(me);
    res.json({
        me
    });
});

router.get('/:username', requireJwtAuth, async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.params.username
        });
        if (!user) return res.status(404).json({
            message: 'No user found.'
        });
        res.json({
            user: user.toJSON()
        });
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong.'
        });
    }
});

router.get('/', requireJwtAuth, async (req, res) => {
    try {
        const users = await User.find().sort({
            createdAt: 'desc'
        });

        res.json({
            users: users.map((m) => {
                return m.toJSON();
            }),
        });
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong.'
        });
    }
});

module.exports = router;