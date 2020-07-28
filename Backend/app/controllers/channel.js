const Channel = require('../models/channel');
const mongoose = require('mongoose');
const User = require('../models/user')

function createChannel(name, admin, users) {
  let members = [...admin, ...users];
  let newChannel = new Channel({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    admin: admin,
    members: members
  })
  newChannel.exec().then(channel => {
    channel.members.forEach(memberId => {
      User.findByIdAndUpdate(memberId, { $push: { channels: channel._id } })
    });
    return channel._id;
  })
}

function updateChannel(id, object) {
  Channel.findByIdAndUpdate(id, object).exec().then((err, doc) => {
    if (!err) { return }
  });
}

function getChannel(id) {
  Channel.findById(id).exec().then((err, doc) => {
    if (!err) {
      return doc;
    }
  })
}
module.exports = {
  new: (name, admin, members) => createChannel(name, admin, members),
  update: (id, channel) => updateChannel(id, channel),
  get: (id) => getChannel(id)
};