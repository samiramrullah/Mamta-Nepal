const express = require('express')
const router = express.Router();
const validator = require('validator')
const bcrypt = require('bcryptjs')
const mongoose=require('mongoose')
const userSchema = require('../models/user')

router.post('/register', async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).json({ message: 'Invalid data' })
        if (!validator.isEmail(email)) return res.status(400).json({ message: "Invalid Email" })

        //if email already exist
        const user = await userSchema.findOne({ email })
        if (user) return res.status(400).json({ message: "Email Already in use" })

        //save to database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userSchema({ _id: new mongoose.Types.ObjectId, name, email, password: hashedPassword })
        newUser.save()
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        next(error);
    }
})

module.exports = router