const router = require("express").Router();
const User = require("../models/Users")

//USER TEST
router.get("/usertest", (req, res) => {
    res.send("user test successfull");
});

//GET USER
router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL USERS
router.get("/findAll", async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE USER
router.post("/update", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        mobile: req.body.mobile,
        email: req.body.email,
        address: req.body.address,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_KEY
        ).toString()
    });
    try {
        const saveUser = await newUser.save()
        res.redirect("http://localhost:3000/login").json(saveUser);
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE USER
router.get("/delete/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router