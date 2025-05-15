require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('❌ MONGODB_URI is missing in .env file')
        }

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('✅ MongoDB Connected')
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message)
        process.exit(1) // Exit process on failure
    }
}

module.exports = connectDB
