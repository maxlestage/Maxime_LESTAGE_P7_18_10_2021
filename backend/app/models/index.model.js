const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model.js')(sequelize, Sequelize);
db.Comment = require('./comment.model.js')(sequelize, Sequelize);
db.Post = require('./post.model.js')(sequelize, Sequelize);

// Clé étrangère userId qui lie, la table users à Post
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);

// Clé étrangère userId qui lie, la table users à Post
db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);

// Clé étrangère postId qui lie, la table Post à Comment
db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);

module.exports = db;
