const jwt = require('jsonwebtoken');

// Fonction pour générer un token unique
module.exports = async (req, res, next) => {
    try {
        const token = await req.headers.authorization.split(' ')[1];
        const decodedToken = await jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = await decodedToken.userId; //token decodé
        res.locals.userId = userId;
        if (req.body.userId && req.body.userId !== userId) {
            // retirer pour le p7
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!'),
        });
    }
};
