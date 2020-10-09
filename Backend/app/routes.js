const express = require('express');
const router = express.Router();
const verify = require('./middlewares/verify');
const auth = require('./controllers/auth');
const users = require('./controllers/user');
const avataUpload = require('./middlewares/avatar')
const fileUpload = require('./middlewares/files');

router.post("/login", auth.login);
router.post("/signup", auth.signup);

//CRUD Operation
router.get('/users/:id', verify, users.byId);
router.get('/users', verify, users.all);
router.patch('/users/', verify, avataUpload, users.update);
router.delete('/users/:id', verify, users.delete);

router.post('/uploads', verify, fileUpload, (req, res) => { res.send(req.files) });
router.get('/uploads/avatar/:id?', (req, res) => req.params.id ? res.sendFile(__dirname + `/uploads/avatars/${req.params.id}`) : res.sendFile(__dirname + `/uploads/avatars/default.jpg`))
router.get('/uploads/:name', verify, (req, res) => res.sendFile(__dirname + `/uploads/files/${req.params.name}`));

router.use(express.static('./static'));
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