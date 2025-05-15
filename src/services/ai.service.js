const axios = require('axios')

// Existing analysis function
const analyzeWithLlama = async (messageContent) => {
    try {
        const response = await axios.post(
            'http://localhost:11434/api/generate',
            {
                model: 'llama2',
                prompt: `Analyze this SMS for phishing or smishing: "${messageContent}". Return whether it's a smishing message and what keywords triggered the detection.`,
                stream: false,
            }
        )

        return response.data.response
    } catch (error) {
        console.error('AI analysis failed:', error.message)
        throw new Error('AI analysis failed')
    }
}

// 🔁 New rewriting function
const rewriteSmishingMessage = async (originalMessage) => {
    try {
        const prompt = `Rewrite this smishing message while keeping its malicious intent but altering the tone, structure, and vocabulary to simulate a different scam style: "${originalMessage}"`

        const response = await axios.post(
            'http://localhost:11434/api/generate',
            {
                model: 'llama2',
                prompt: prompt,
                stream: false,
            }
        )

        return response.data.response
    } catch (error) {
        console.error('AI rewriting failed:', error.message)
        throw new Error('AI rewriting failed')
    }
}

module.exports = {
    analyzeWithLlama,
    rewriteSmishingMessage,
}
