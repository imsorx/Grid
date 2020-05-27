const Conversation = require("../models/conversation");
const User = require("../models/user");
const mongoose = require("mongoose");
const log = require("../utils/logger");

function newConverse(from, to) {
  let newConvers = new Conversation({
    _id: new mongoose.Types.ObjectId(),
    members: [from, to],
  });
  newConvers.save((err, doc) => {
    if (!err) {
      doc.members.forEach((member) => {
        User.findByIdAndUpdate(member, { $push: { convers: doc._id } });
      });
    } else {
      log.error(err);
    }
  });
}
async function byId(id) {
  try {
    let conversation = await Conversation.findById(id).exec();
    return conversation;
  } catch (err) {
    log.error(err);
  }
}
function byMembers(user1, user2) {
  Conversation.findOne({ members: { $all: [user1, user2] } })
    .then((convers) => convers)
    .catch((err) => log.error(err));
}

module.exports = {
  new: (user1, user2) => newConverse(user1, user2),
  getbyId: (id) => byId(id),
  getbyMembers: (user1, user2) => byMembers(user1, user2),
};
