const router = require("express").Router();
const User = require("../models/Users")
const CryptoJS = require("crypto-js")
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded())

// REGISTER USER
router.post("/register", async(req, res) => {
    const newUser = new User({
        username : req.body.username,
        mobile : req.body.mobile,
        email : req.body.email,
        address : req.body.address,
        password : CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_KEY
        ).toString()
    });
    try {
        const saveUser = await newUser.save()
        res.redirect("http://localhost:3000/login").json(saveUser);
    } catch(err) {
        res.status(500).json(err)
    }
})

// LOGIN
router.post("/login", async(req, res) => {
    try {
            const user = await User.findOne({
                email : req.body.email
            });

            !user && res.status(400).json("Wrong email")

            const inputPassword = req.body.password;
            const hashedPassword = CryptoJS.AES.decrypt(
                user.password,
                process.env.PASS_KEY
            );
            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8) 
            originalPassword != inputPassword &&  res.status(400).json("Wrong password")
            res.redirect("http://localhost:3000/").json(user)

    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router

    // "username" : "Jaypal Girase",
    // "mobile" : "7822047459",
    // "email" : "jaypal@gamil.com",
    // "address" : "shirpur",
    // "password" : "jaypal"