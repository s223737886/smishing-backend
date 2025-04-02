const User = require('../models/user.model')
const {
    hashPassword,
    comparePassword,
    generateToken,
} = require('../utils/token.util')

/**
 * POST /api/auth/signup
 */
exports.signup = async (req, res) => {
    try {
        const { fullName, phoneNumber, email, password } = req.body

        if (!fullName || !phoneNumber || !email || !password) {
            return res.status(400).json({
                success: false,
                message:
                    'All fields (fullName, phoneNumber, email, password) are required.',
            })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Email already registered.',
            })
        }

        const passwordHash = await hashPassword(password)

        const newUser = new User({
            fullName,
            phoneNumber,
            email,
            passwordHash,
            // isEmailVerified TO-DO: Add OTP
        })

        await newUser.save()

        return res.status(201).json({
            success: true,
            message: 'User registered successfully.',
        })
    } catch (error) {
        console.error('Error in signup:', error)
        return res.status(500).json({
            success: false,
            message: 'Internal server error.',
        })
    }
}

/**
 * POST /api/auth/login
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required.',
            })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email.',
            })
        }

        const isMatch = await comparePassword(password, user.passwordHash)
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials.',
            })
        }

        // TO-DO: Add OTP

        // Generate a JWT
        const token = generateToken({ userId: user._id })

        return res.status(200).json({
            success: true,
            message: 'Login successful.',
            token,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error.',
        })
    }
}
