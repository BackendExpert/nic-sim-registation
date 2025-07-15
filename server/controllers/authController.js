const bcrypt = require('bcrypt');
const validator = require('validator')
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const Role = require('../models/Role');
const User = require('../models/User');
const transporter = require('../utils/emailTransporter');
const UserOTP = require('../models/UserOTP');


const authController = {
    signup: async (req, res) => {
        try {
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

            const hashpass = await bcrypt.hash(password, 10)

            const finduserrole = await Role.findOne({ name: 'staff' })

            const createnewuser = new User({
                username: username,
                email: email,
                password: hashpass,
                roles: finduserrole._id
            })

            const resultnewuser = await createnewuser.save()

            if (resultnewuser) {
                const generateSecureCode = (length = 10) => {
                    return crypto.randomBytes(length)
                        .toString('base64')
                        .replace(/[^a-zA-Z0-9]/g, '')
                        .slice(0, length);
                };

                const newCode = generateSecureCode(10);

                const hashcode = await bcrypt.hash(newCode, 10)

                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: 'Account Verification Code, SIM Regisation ',
                    html: `
                            <p>Dear ${username},</p>
                            <p>Thank you for registering at the Online SIM Regisation Verification System.</p>
                            <p>Your Email verification code is:</p>
                            <h2 style="color:#7c340c;">${verificationCode}</h2>                          
                            <br>
                            <p style="color:gray;">Do not share this code with anyone.</p>
                        `,
                };

                const storeOTP = new UserOTP({
                    email: email,
                    otp: hashcode
                })

                const resultstoreotp = await storeOTP.save()

                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        return res.json({ Error: "Registration succeeded, but failed to send verification email." });
                    } else {
                        const tokenemailVerify = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '5min' });

                        return res.json({
                            Status: "Success",
                            verifyToken: tokenemailVerify,
                            Message: "Registration successful. Verification code sent to your email. Verify Email Please wait and wait for activation."
                        });
                    }
                });

            }

            if (checkUser) {
                return res.json({ Error: "User already exists in the system" })
            }
        }
        catch (err) {
            console.log(err)
        }
    }
};

module.exports = authController;    