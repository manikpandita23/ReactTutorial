const router = require ("express"). Router();
const {User, validate}= require("../models/user");
const bcrypt = require ("bcrypt");

router.post("/", async (req, res)=>{
    try{
        const {error}= validate (req.body);
        if(error)
            return res.status(400).send(error.details[0].message);
        let user = await User.findOne({email: req.body.email});
        if(user)
            return res.status(400).send("User already registered");

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...req.body, password: hashPassword}).save();
        res.send("User registered");
    } catch (error){
        res.status(500).send(error.message);
    }
});

module.exports = router;