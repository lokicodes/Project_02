const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "SecretKoSecretRhendoBhadwe" ;

router.post("/createUser",[
        body("name", "Enter a valid name, min length 3 characters").isLength({
            min: 3,
        }),
        body("email", "Enter a valid email address").isEmail(),
        body("password", "Password must be 3 characters atleast").isLength({
            min: 3,
        }),
    ],async(req, res) => {
        // return errors if any :
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            // check whether the user already exists
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry , a user with this email already exists" });
            }

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            // creating a new user data in database
            user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email
            });

            const data = {
                user:{
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET) ;
            // console.log(jwtData);
            // res.json(user);
            res.json({authToken})


        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some Error Occured");
        }
    }
);

module.exports = router;
