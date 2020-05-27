const Message = require("../models/message");
const mongoose = require("mongoose");
const log = require("../utils/logger");

async function newMessage(parentId, from, message) {
  try {
    let msg = new Message({
      _id: new mongoose.Types.ObjectId(),
      from: from,
      msg: message,
      parentId: parentId,
    });
    let doc = await msg.save();
    return doc._id;
  } catch (err) {
    log.error(err);
  }
}
async function getMsg(id) {
  let msg = await Message.findById(id).exec();
  return msg;
}

module.exports = {
  new: newMessage,
  get: getMsg,
};
