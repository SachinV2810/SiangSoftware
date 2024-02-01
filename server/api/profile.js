const User = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/profile', async(req, res) => {
    let userData = await User.findOne({});
    return res.json(userData);
})

module.exports = router