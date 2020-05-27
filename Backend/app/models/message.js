const mongoose = require("mongoose");

const msgSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  from: { type: String, required: true, require: true },
  msg: { type: String, required: true, require: true },
  parentId: { type: mongoose.Schema.Types.ObjectId, require: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", msgSchema);