require('dotenv').config()
const express = require('express')
const connectDB = require('./db.config')
const authRoute = require('./routes/auth.route.js')

const app = express()
app.use(express.json())

// Connect to MongoDB before starting the server
const startServer = async () => {
    try {
        await connectDB() // Ensure MongoDB is connected before proceeding
        console.log('✅ Database connected. Starting server...')

        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`)
        })
    } catch (error) {
        console.error('❌ Failed to connect to database. Server not started.')
        process.exit(1) // Exit if DB connection fails
    }
}

startServer()

// Mount auth routes at /api/auth
app.use('/api/auth', authRoute)

module.exports = app // Keep this only if you're writing tests
