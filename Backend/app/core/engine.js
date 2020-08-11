const WebSocket = require("ws");
const log = require("../utils/logger");
const Wrapper = require("ws-server-wrapper");
const utils = require("util");

//Loading Controllers
const User = require("../controllers/user");
const Channel = require("../controllers/channel");
const Conversation = require("../controllers/conversation");
const Message = require("../controllers/message");

function Engine(httpServer) {
  //Binding httpserver to Socket server and wrapping it.
  const socketServer = new WebSocket.Server({ server: httpServer });
  const serverWrapper = new Wrapper(socketServer);

  //mapping sockets with user ids.
  var users = new Map();

  function logout(id) {
    if (users.has(id)) {
      users.delete(id);
      users.forEach((user) => {
        user.emit('offline', id);
      });
    }
  }
  function login(socket, userid) {
    if (users.has(userid)) {
      throw new Error('Already logged in, Logout previous session first!');
    } else {
      socket.set('id', userid);
      users.forEach((user) => {
        user.emit('online', userid);
      });
      users.set(userid, socket);
    }
    log.warn(`Online Users : ${users.size}`);
  }

  //make sure user is logged out on disconnect
  serverWrapper.on('disconnect', (socket) => {
    let id = socket.get("id");
    if (id) {
      logout(id);
    }
  });

  async function handleConverseMessage(parentId, from, message) {
    let msgId = await Message.new(parentId, from, message);
    let conversation = await Conversation.getbyId(parentId);
    let members = conversation.members;
    members.forEach(member => {
      member = '' + member;
      if (member != from) {
        sendMessage(member, 'msg', from, msgId, message);
      }
    });
  }

  function sendMessage(to, event, from, msgId, message, channel = null) {
    try {
      if (users.has(to)) {
        if (channel) {
          users.get(to).of(channel).emit(event, from, message);
        } else {
          users.get(to).emit(event, from, message);
        }
      } else {
        User.addPendings(to, msgId);
      }
    } catch (err) {
      log.error(err)
    }
  }

  //listening to events on all connected sockets


  //Login to socket
  serverWrapper.on('login', function (id) {
    login(this, id);
  });
  serverWrapper.on('logout', function () {
    logout(this);
  });

  //Conversation stream
  serverWrapper
    .of("convers")
    .on("new", (user1, user2) => Conversation.new(user1, user2));
  serverWrapper
    .of("convers")
    .on("message", (parentID, from, message) =>
      handleConverseMessage(parentID, from, message)
    );

  //Channel Stream
  serverWrapper
    .of("channel")
    .on("new", (name, owner, members = []) =>
      Channel.new(name, owner, members)
    );
  serverWrapper
    .of("channel")
    .on("update", (id, object) => Channel.update(id, object));
  serverWrapper
    .of("channel")
    .on("message", (parentId, from, message) =>
      Message.new(parentId, from, message)
    );
}

//Payload templates
//{ "c": "convers","a": ["new", "5ebd48f5d9dcae0954979b78", "5ec93512d1c0b50360ba7472"] }
// { "c": "convers","a": ["message", "5ec93978a228d713bc1b43ac", "5ebd48f5d9dcae0954979b78", "Test"] }
// {"a":["login","5ebd48f5d9dcae0954979b78"]}
// {"a":["login","5ec93512d1c0b50360ba7472"]}

module.exports = Engine;