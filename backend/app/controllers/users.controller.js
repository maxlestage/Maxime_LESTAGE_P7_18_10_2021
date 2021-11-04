const { User } = require('../models/index.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { locals } = require('../../app.js');

// Fonction pour créer un utilisateur avec un mot de passe chiffré|Hashé à l'aide de bcrypt.
exports.userSignup = async (req, res) => {
    // Ma fonction de création de compte
    let user = await User.findOne({ where: { mail: req.body.mail } });
    if (user !== null) {
        return res.status(401).json({
            err: 'Un utilisateur utilise déjà cette adresse mail. ',
        });
    }
    if (user === null) {
        const hash = await bcrypt.hash(req.body.password, 10);
        user = await User.create({
            lastName: req.body.lastName, // req.body.lastName 'Ben'
            firstName: req.body.firstName, // req.body.firstName 'LESTAGE'
            mail: req.body.mail, // req.body.mail 'max@max.com'
            password: hash,
            birthday: req.body.birthday, // req.body.birthday
            profilePicture: req.file.filename, // req.body.profilePicture
            isEnable: 0, // req.body.isEnable
        });
        console.log('je suis ici');
        return res.status(201).json({ message: 'Utilisateur créé' });
    }
};

exports.userLogin = async (req, res) => {
    // Ma fonction de connexion
    let user = await User.findOne({ where: { mail: req.body.mail } });
    if (user) {
        const password = req.body.password;
        const hash = user.password;
        // console.log(password);
        // console.log(hash);
        let valid = await bcrypt.compare(password, hash);
        // console.log(!valid);
        // console.log(valid);
        if (!valid) {
            console.log('err');
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        // console.log('bon');

        // Express-session :
        req.session.userId = user.id; // userId = id > user.id

        return res.status(200).json({ message: 'Utilisateur connecté.' });
        // .json({
        //     token: jwt.sign({ userId: user.id }, 'RANDOM_TOKEN_SECRET', {
        //         expiresIn: '24h',
        //     }),
        // });
    }
};

exports.userLogout = async (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                res.status(400).send('Impossible de se déconnecter');
            } else {
                res.send('Utilisateur déconnecté.');
            }
        });
    } else {
        res.end();
    }
};

exports.userEdit = async (req, res) => {
    const user = res.locals.user;
    if (user === null) {
        return res.status(401).json({ message: 'Vous devez être connecté' });
    }

    if (user) {
        userUpdate = await user.update({
            lastName: req.body.lastName, // req.body.lastName 'Ben'
            firstName: req.body.firstName, // req.body.firstName 'LESTAGE'
            birthday: req.body.birthday, // req.body.birthday
            profilePicture: req.file.filename, // req.body.profilePicture
            isEnable: 0, // req.body.isEnable
        });
        return res.status(201).json(userUpdate.toJSON());
    }
};

exports.userSignupAdmin = async (req, res) => {
    // Ma fonction de création de compte
    let user = await User.findOne({ where: { mail: req.body.mail } });
    if (user !== null) {
        console.log('Un admin est déjà créé');
    }
    if (user === null) {
        const hash = await bcrypt.hash(req.body.password, 10);
        user = await User.create({
            lastName: req.body.lastName, // req.body.lastName 'Ben'
            firstName: req.body.firstName, // req.body.firstName 'LESTAGE'
            mail: req.body.mail, // req.body.mail 'max@max.com'
            password: hash,
            birthday: req.body.birthday, // req.body.birthday
            profilePicture: req.body.profilePicture, // req.body.profilePicture
            isEnable: 0, // req.body.isEnable
        });
        console.log('je suis ici');
        return res.status(201).json({ message: 'Utilisateur créé' });
    }
};

// // Delete all Tutorials from the database.
// exports.deleteAll = async (req, res) => {
//     const posts = await Post.findAll();
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {};
