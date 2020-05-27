const mongoose = require('mongoose');

const conversSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    members: [{ type: mongoose.Schema.Types.ObjectId }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Conversation', conversSchema);