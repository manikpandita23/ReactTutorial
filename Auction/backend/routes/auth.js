const router = require ("express").Router();
const {User}= require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require ("joi");

router.post ("/", async (req, res) =>{
    try{
        const {error} = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const user = await User.findOne({email: req.body.email});
        if (!user) return res.status(400).send("Invalid email");
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send("Invalid password");
        const token = user.generateAuthToken();
        res.send(token);
        }catch (ex){
            console.log(ex);
            }
            });
const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
});
return schema.validate(data);
};

module.exports = router;