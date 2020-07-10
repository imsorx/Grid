const bcrypt = require('bcrypt');
const salt = require('../config.json').salt;

module.exports = {
    check: async (password, passwordHash) => await bcrypt.compare(password, passwordHash),
    hashit: async (password) =>  await bcrypt.hash(password, salt)
}