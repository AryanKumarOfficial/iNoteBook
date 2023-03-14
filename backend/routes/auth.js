const express = require('express');
const User = require("../models/User")
const router = express.Router()
const { body, validationResult } = require('express-validator');


// create a user using :"POST" "/api/auth" Doesn't require login createuser
router.post('/createuser', [
    //    validates the user inputs

    body('name', 'minimum 3 character name required').isLength({ min: 3 }),
    body('email', 'not a valid email').isEmail(),
    body('password', 'password can be 8 to 16 charcter long').isLength({ min: 8, max: 16 }),
    body('userName', "user name can't be less than 5 character").isLength({ min: 5 }),
    body('userName', 'can only contain alphabets and numbers').isAlphanumeric(),
], async (req, res) => {
    // if there are errors, return bad request and err messages
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check weather  user with this email alreafy exists
    try {

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "a user with this email already exists" })
        }
        else {
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                userName: req.body.userName
            })
        }
        res.json(user)
    }
    catch (error) {
        console.log(error);
        res.status(500).json("Some error occured")

    }


})

module.exports = router;
