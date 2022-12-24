const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const db = require("../models");
const User = db.user;
const router = Router()

router.post("/signup",
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'the minimum password length must be up to 6 symbols')
            .isLength({ min: 6 })

    ],
    async (req, res) => {
        try {

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Some data wrong during registration, please check your email or password'
                })
            }
            const { email, password } = req.body

            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: 'User such this email existed' })
            }
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({ email, password: hashedPassword })

            await user.save()

            res.status(201).json({ message: `User  with ${email} is created` })

        } catch (e) {
            res.status(500).json({ message: 'Something is not right, try again' })
        }
    }

);

router.post("/login",
    [
        check('email', 'Enter correct email').isEmail(),
        check('password', 'Enter password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Some data wrong during login'
                })
            }
            const { email, password } = req.body


            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ message: 'User is not found' })
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ message: 'Passoword is not correct, try again' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({ message: 'Something is not right, try again' })
        }
    }
);
module.exports = router;