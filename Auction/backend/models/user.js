const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    date: { type: Date, required: true },  // Corrected to Date type
    minAmount: { type: Number, required: true },  // Corrected to Number type
    maxAmount: { type: Number, required: true },  // Corrected to Number type
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "5d",
    });
    return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        address: Joi.string().required().label("Address"),
        date: Joi.date().required().label("Date"),  // Corrected to Joi.date()
        minAmount: Joi.number().required().label("Min Amount"),  // Corrected to Joi.number()
        maxAmount: Joi.number().required().label("Max Amount"),  // Corrected to Joi.number()
    });
    return schema.validate(data);
};

module.exports = { User, validate };  // Corrected export statement
