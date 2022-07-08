const passport = require('passport');
const localStrategy = require('passport-local');
const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = () => {
    passport.user(
        'signin',
        new localStrategy(
            // {
            // usernameField: "email",
            // passwordField: "password",
            // },
            // async (email, password, done) => {
            {
                usernameField: "email",
                passwordField: "password",
            },
            async (email, password, done) => {
                try {
                    console.log()
                } catch (error) {

            }   
        })
    )
}