const express = require('express')
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router()


router.post('/signup', async (req, res, next) => {
    const { email, nick, password } = req.body;
    try {
        const exUser = await User.findOne({
            where: {
                email: email
            }
        })
        if (exUser) {
            return res.redirect('/join?error=exist')
        }
        const hash = bcrypt.hash(password, 10)
        await User.create({
            email,
            nick,
            password: hash,
        });
        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return next(error);
    }
});

module.exports = router;