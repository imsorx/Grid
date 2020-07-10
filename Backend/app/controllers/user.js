const User = require("../models/user");
const log = require("../utils/logger");
var path = require("path");
var url = require("url");

let serverError = new Error("Internal Server Error");

function allUsers() {
  try {
    let users = User.find().select("_id img name mail").exec();
    return users;
  } catch (err) {
    log.error(err);
    throw serverError;
  }
}

function getbyID(id) {
  try {
    let user = User.findOne({ _id: id })
      .select("_id img name mail")
      .exec();
    // user.img = url.format({
    //   pathname: path.join(__dirname, user.img),
    //   protocol: 'http://',
    //   slashes: true
    // });
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
  byId: async (req, res) => {
    try {
      let user = await getbyID(req.params.id);
      return res.status(200).json(user);
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
