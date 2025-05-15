require('dotenv').config() // Load .env variables
const express = require('express')
const connectDB = require('./configs/db.config.js')

const authRoute = require('./routes/auth.route') // Your auth routes
const messageRoute = require('./routes/message.route') // Your message routes

const app = express()
app.use(express.json()) // Middleware to parse JSON

// Connect to MongoDB and start the server
const startServer = async () => {
    try {
        await connectDB() // Connect to MongoDB
        console.log('✅ Database connected. Starting server...')

        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`)
        })
    } catch (error) {
        console.error(
            '❌ Failed to connect to database. Server not started.',
            error
        )
        process.exit(1) // Exit app if DB fails to connect
    }
}

// Mount your API routes
app.use('/api/auth', authRoute)
app.use('/api/messages', messageRoute)

startServer()

module.exports = app // Needed for testing only
