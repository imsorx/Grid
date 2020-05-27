const User = require("../models/user");
const log = require("../utils/logger");

let serverError = new Error("Internal Server Error");

async function allUsers() {
  try {
    let users = await User.find().select("_id img name mail").exec();
    return users;
  } catch (err) {
    log.error(err);
    throw serverError;
  }
}

async function getbyID(id) {
  try {
    let user = await User.findOne({ _id: id })
      .select("_id img name mail")
      .exec();
    return user;
  } catch (err) {
    log.error(err);
    throw serverError;
  }
}
function update(id, userObj) {
  User.findOneAndUpdate({ _id: id }, userObj, (err, doc) => {
    if (doc) {
      return;
    }
    log.error(err);
    throw serverError;
  });
}
function deleteUser(id) {
  User.deleteOne({ _id: id }, (err) => {
    if (err) {
      throw serverError;
    }
    return;
  });
}
function addPendings(id, mesgId) {
  User.findByIdAndUpdate(id, { $push: { pendings: mesgId } }).exec();
}
module.exports = {
  all: async (req, res) => {
    try {
      let users = await allUsers();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  byId: (req, res) => {
    try {
      return res.status(200).json(getbyID(req.params.id));
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  update: (req, res) => {
    try {
      update(req.body._id, req.body);
      return res.sendStatus(200);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  delete: (req, res) => {
    try {
      deleteUser(req.params.id);
      return res.sendStatus(200);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  },
  addPendings,
};
