const express = require('express')
const router = express.Router()
const Message = require('../models/message')
const { analyzeWithLlama } = require('../services/ai.service')

// POST: Create a new message and analyze it
router.post('/', async (req, res) => {
    try {
        const { content, sender } = req.body

        // Analyze content with LLaMA
        const aiResponse = await analyzeWithLlama(content)

        // Very simple parsing logic (you can improve this!)
        const isSmishing =
            aiResponse.toLowerCase().includes('yes') ||
            aiResponse.toLowerCase().includes('smishing')
        const detectedKeywords = [] // (Optional: extract from aiResponse if listed)

        const newMessage = new Message({
            content,
            sender,
            isSmishing,
            detectedKeywords,
        })

        await newMessage.save()
        res.status(201).json(newMessage)
    } catch (err) {
        console.error('Error saving message:', err)
        res.status(500).json({ message: 'Error analyzing or saving message' })
    }
})

module.exports = router
