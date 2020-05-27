const mongoose = require('mongoose');
const tokenizer = require('../utils/token');
const hash = require('../utils/hash');
const User = require('../models/user');
const log = require('../utils/logger');

async function login(mail, pwd) {
    const user = await User.findOne({ mail: mail }).exec()
    if (!user) {
        throw new Error('No user Found');
    }
    try {
        let verify = await hash.check(pwd, user.pwd);
        let token = tokenizer({ id: user._id, mail: user.mail });
        return {
            token: token,
            _id: user._id,
            img: user.img,
            name: user.name,
            mail: user.mail,
            convers: user.convers,
            channels: user.channels
        }
    } catch (err) {
        throw err;
    }
}

async function signup(name, mail, pwd) {
    try {
        let user = await User.findOne({ mail: mail }).exec();
        if (user) {
            throw new Error('User already exist!');
        } else {
            let hashedpwd = await hash.hashit(pwd);
            let user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: name,
                mail: mail,
                pwd: hashedpwd
            });
            let savedUser = await user.save();
            log.info(`${mail} Created Succefully!`)
            return;
        }
    } catch (err) {
        throw err;
    }
}

module.exports = {
    login: async function (req, res) {
        try {
            const user = await login(req.body.mail, req.body.pwd);
            return res.status(200).json(user);
        } catch (err) { res.status(404).send(err.message) }
    },
    signup: async function (req, res) {
        try {
            let response = await signup(req.body.name, req.body.mail, req.body.pwd);
            return res.sendStatus(201);
        } catch (err) {
            return res.status(409).send(err.message);
        }
    }
};