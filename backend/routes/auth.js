const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
// create a user using:POST "/api/auth/" doesn't require Auth

router.post(
  "/",
  [
    body("name").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password", "password must be atleast 5 character").isLength({
      min: 5,
    }),
    body("userName").isLength({min:8}),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => res.json(user))
    .catch(err => console.log(err),
    res.json({errors:"please enter a unique value", message: errors.message}))
  }
);

module.exports = router;
