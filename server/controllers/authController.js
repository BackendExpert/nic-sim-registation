const User = require("../models/User");

const authController = {
    signup: async(req, res ) => {
        try{
            const {
                username,
                email,
                password
            } = req.body

            const checkuser = await User.findOne({ })
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = authController;    