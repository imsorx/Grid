const jwt = require('jsonwebtoken');
const key = require("../config.json").JWT_KEY;


module.exports = (data) => jwt.sign(data,key);