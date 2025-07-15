const bcrypt = require('bcrypt');
const validator = require('validator')
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const Role = require('../models/Role');
const User = require('../models/User');
const transporter = require('../utils/emailTransporter');
const UserOTP = require('../models/UserOTP');

const authController = {
    signup: async(req, res ) => {
        try{
            const {
                username,
                email,
                password
            } = req.body

            if (!password || password.length < 6) {
                return res.json({ Error: "Password must be at least 6 characters long" });
            }

            const checkUser = await User.findOne({
                $or: [
                    { username: username },
                    { email: email }
                ]
            });

            if (checkUser) {
                return res.json({ Error: "User already exists in the system" })
            }
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = authController;    