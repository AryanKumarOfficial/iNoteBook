const express = require('express');
const User = require("../models/User")
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwt_secret = "body('name', 'minimum 3 character name required').isLength({ min: 3 })"

// create a user using :"POST" "/api/auth/createuser" Doesn't require login createuser
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
            const salt = await bcrypt.genSalt(10)
            const secPass = await bcrypt.hash(req.body.password, salt)
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
                userName: req.body.userName
            })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwt_secret)
        console.log(authToken);
        res.json({ authToken })

        // res.json(user)
    }
    catch (error) {
        console.log(error);
        res.status(500).json("Internal Server error")

    }


})


// Authenticate a user using :"POST" "/api/auth/login" Doesn't require login 
router.post('/login', [
    //    validates the user inputs
    body('email', 'not a valid email').isEmail(),
    body('email', "email can't be blank").exists(),
    body('password', 'password can be 8 to 16 charcter long').isLength({ min: 8, max: 16 }),
    body('password', "password can't be blank").exists(),
], async (req, res) => {
    // if there are errors, return bad request and err messages
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "please try to login with correct credentials" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {

            return res.status(400).json({ error: "please try to login with correct credentials" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwt_secret)
        // console.log(authToken);
        res.json({ authToken })

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server error")
    }
}
)

module.exports = router;
