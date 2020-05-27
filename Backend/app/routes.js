const express = require('express');
const router = express.Router();
const verify = require('./middlewares/verify');
const auth = require('./controllers/auth');
const users = require('./controllers/user');


router.post("/login", auth.login);
router.post("/signup", auth.signup);

router.get('/users', verify, users.all);
router.get('/users/:id', verify, users.byId);
router.patch('/users/', verify, users.update);
router.delete('/users/:id', verify, users.delete);


router.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
});

router.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/static/404.html');
});                 
router.post('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/static/404.html');
})

module.exports = router;