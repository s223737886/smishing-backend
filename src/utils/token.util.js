const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'mysecret'

async function hashPassword(password) {
    const saltRounds = 10
    return bcrypt.hash(password, saltRounds)
}

async function comparePassword(password, hash) {
    return bcrypt.compare(password, hash)
}

function generateToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })
}

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
}
