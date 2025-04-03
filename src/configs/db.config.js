require('dotenv').config() // Load .env variables
const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI // Get connection string from .env

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('✅ MongoDB Connected')
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error)
        process.exit(1)
    }
}

module.exports = connectDB // Export function
