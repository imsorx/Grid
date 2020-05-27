const mongoose = require('mongoose');

const channelSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, unique: true, required: true },
  admin: [{ type: String, required: true }],
  members: [{ type: mongoose.Schema.Types.ObjectId}],
}, { timestamps: true });

module.exports = mongoose.model('Channel', channelSchema);