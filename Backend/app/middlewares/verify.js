const jwt = require('jsonwebtoken');
const SECRET = require('../config.json').JWT_KEY;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, SECRET);
        next();
    } catch (err) {
        return res.status(401).send('Login first!');
    }
}