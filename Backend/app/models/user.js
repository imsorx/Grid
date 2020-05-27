const mongoose = require("mongoose");
const path = require('path');
const config = require('../config.json');

const AVATAR = `${path.join(config.storage.basePath, config.storage.avatarPath, 'default.png')}`;

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  img: { type: String, default: AVATAR },
  name: { type: String, required: true },
  mail: { type: String, unique: true, required: true },
  pwd: { type: String, required: true },
  convers: [mongoose.Schema.Types.ObjectId],
  channels: [mongoose.Schema.Types.ObjectId],
  pendings: [String]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);