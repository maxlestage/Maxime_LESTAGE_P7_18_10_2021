const { User, Post } = require('../models/index.model.js');

const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { locals } = require('../../app.js');

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
        req.session.userId = user.id; // userId = id > user.id
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

        const userJson = user.toJSON();
        delete userJson.password;
        delete userJson.createdAt;
        delete userJson.updatedAt;
        delete userJson.isEnable;
        return res.status(200).json(userJson);
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
        // console.log('je suis ici');
        return res.status(201).json({ message: 'Utilisateur créé' });
    }
};

exports.userMe = async (req, res) => {
    const user = res.locals.user;
    return res.status(200).json(user.toJSON());
};

// Find all posts from a user.
exports.getAllPostsByUser = async (req, res) => {
    // const user = res.locals.user;
    // if (parseInt(user.id) !== parseInt(req.params.id)) {
    //     res.status(403).send("You don't have access");
    // } else {

    const posts = await Post.findAll({
        where: { userId: req.params.id },
    });
    // console.log({ id: user.id });
    // console.log(parseInt(req.params.id));

    if (posts.length) {
        return res.status(200).json(posts);
    } else {
        return res.status(404).json({ message: 'Aucun post trouvé' });
    }
};

// // Find all posts from a user .
// exports.getAllPostsByUser = async (req, res) => {
//     const user = res.locals.user;
//     const posts = await Post.findAll({
//         where: { userId: req.params.id },
//     });

//     // console.log({ id: user.id });
//     // console.log(parseInt(req.params.id));

//     if (user.id === parseInt(req.params.id)) {
//         return res.status(200).json(posts);
//     } else {
//         return res
//             .status(404)
//             .json({ message: 'Vous ne pouvez pas visualiser cette page' });
//     }
// };
