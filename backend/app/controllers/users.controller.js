const { User } = require('../models/index.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
            birthday: new Date('December 17, 1995'), // req.body.birthday
            profilePicture: 0, // req.body.profilePicture
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
        const hash = req.body.password;
        // console.log(hash);
        // console.log(user.password);
        let valid = await bcrypt.compare(hash, user.password);
        // console.log(!valid);
        // console.log(valid);
        if (!valid) {
            console.log('err');
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        console.log('bon');
        return res.status(200).json({
            token: jwt.sign({ userId: user.id }, 'RANDOM_TOKEN_SECRET', {
                expiresIn: '24h',
            }),
        });
    }
};
