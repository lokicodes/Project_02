const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require("../middlewares/fetchUser") ;

const JWT_SECRET = "SecretKoSecretRhendoBhadwe" ;

//Route 1 : Creating a user
//matlab : isme initial token banta hai password hashing + salting se jo store hota hai db me.
router.post("/createUser",[
    body("name", "Enter a valid name, min length 3 characters").isLength({min: 3,}),
    body("email", "Enter a valid email address").isEmail(),
    body("password", "Password must be 3 characters atleast").isLength({min: 3,}),
], async(req, res) => {
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
        res.json({authToken})


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
);

//Route 2 : Authenticate a user
// matlab : isme fir se ek tojen banta hai jo ki phir match kiya jata hai db me pade token se .
router.post("/login",[
    body("email", "Enter a valid email address").isEmail(),
    body("password", "Password cannot be blank").exists(),
],async(req, res) => {

    // return errors if any :
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body ;
    try {
        let user = await User.findOne({email}) ;
        if(!user) {
            return res.status(400).json({error : "Please try to login with correct credentials"}) ;
        } 

        const passwordCompare = await bcrypt.compare(password , user.password) ;
        if(!passwordCompare) {
            return res.status(400).json({error : "Please try to login with correct credentials"}) ;
        }

        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET) ;
        res.json({authToken})

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


})

//Route 3 : Get logged in user details. Login required
//Authentication ke baad humare pass ek authenticated token aa gaya hai usse 
//user ka saara data kaise nikalenge ye part hai
router.post('/getuser', fetchUser,  async (req, res) => {

    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

module.exports = router;
