const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    isSmishing: {
        type: Boolean,
        default: false,
    },
    detectedKeywords: {
        type: [String],
        default: [],
    },
    riskExplanation: {
        type: String,
        default: '',
    },
})

// ✅ Prevent OverwriteModelError
module.exports =
    mongoose.models.Message || mongoose.model('Message', messageSchema)
