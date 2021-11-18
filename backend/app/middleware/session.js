const { User } = require('../models/index.model');

module.exports = async (req, res, next) => {
    // Si dans la session du client act' on a pas la valeur de l'id => on est pas auth'
    if (req.session.userId === undefined) {
        return res.status(401).json({ message: "Vous n'êtes pas connecté" });
    } else {
        // Si la personne est connectée :
        res.locals.user = await User.findByPk(req.session.userId, {
            attributes: {
                exclude: [
                    'password',
                    'mail',
                    'createdAt',
                    'updatedAt',
                    'isEnable',
                ],
            },
        });
        next();
    }
};
