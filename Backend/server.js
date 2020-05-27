const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const engine = require('./app/core/engine');

const config = require('./app/config.json');
const name = config.app.name;
const port = config.app.port || 4000;
const db_host = config.db.host;
const db_port = config.db.port;
const db_name = config.db.name;

const bodyParser = require('body-parser');
const log = require('./app/utils/logger');

const app = express();
const server = http.createServer(app);
const webSocket = new engine(server);

// DB Connection
mongoose.connect(`mongodb://${db_host}:${db_port}/${db_name}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false }).catch(err => { log.error(err) });
mongoose.connection.once('open', () => { log.info("Connected to MongoDB") })
// mongoose.set('debug', true);
// mongoose.set('bufferCommands', false);


// Middlewares
app.use(log.httpLogger);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Setting Headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Static Files
app.use(express.static(__dirname + '/app/static/'));
// Routes
app.use(require('./app/routes'));


server.listen(port, () => {
    log.info(`${name} started @ ${port}`);
});