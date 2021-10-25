const express = require('express');
const app = express();
// const path = require("path");

// dotENV
require('dotenv').config();

// Middleware de gestion de session (cookie) :
const expressSession = require('express-session');
const sessionAuth = require('./app/middleware/session.js');

// Routes :
const userRoutes = require('./app/routes/user.route.js');
const postRoutes = require('./app/routes/post.route.js');
const commentRoutes = require('./app/routes/comment.route.js');

//? CORS signifie « Cross Origin Resource Sharing »
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    );
    next();
});

// Middleware de gestion de session (cookie)
app.use(expressSession({ secret: process.env.SECRET_SESSION })); // PWGEN 25

// Parse requests of content-type - application/json
app.use(express.json());

// ¨arse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Groupomania BACKEND API application.' });
});

app.use('/api/auth', userRoutes);
app.use('/api/posts', sessionAuth, postRoutes); // Session stock la session dans un cookie, authbyjwt permet la gestion des posts.
app.use('/api/posts', sessionAuth, commentRoutes);
module.exports = app;
