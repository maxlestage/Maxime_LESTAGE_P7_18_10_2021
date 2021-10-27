const http = require('http');
// Remplacement de http par https afin de bénéficier des certificats Secure Sockets Layer (SSL)
const app = require('./app');

// dotENV
require('dotenv').config();

// SEQUELIZE TEST START
const userCtrl = require('./app/controllers/users.controller.js');

const db = require('./app/models/index.model');

const run = async () => {
    await userCtrl.userSignupAdmin({
        body: {
            lastName: process.env.LASTNAME,
            firstName: process.env.FIRSTNAME,
            mail: process.env.MAIL,
            password: process.env.PASSWORD,
            birthday: process.env.BIRTHDAY,
            profilePicture: process.env.PROFILEPICTURE,
            isEnable: process.env.ISENABLE,
        },
    });
};
// alter ou force
db.sequelize.sync({ alter: true }).then(() => {
    console.log('ADMIN créé');
    run();
});

// SEQUELIZE TEST END

const normalizePort = (val) => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const errorHandler = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind =
        typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind =
        typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

server.listen(port);
