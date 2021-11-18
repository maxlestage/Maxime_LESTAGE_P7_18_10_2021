const { Comment, Post, User } = require('../models/index.model.js');

exports.create = async (req, res) => {
    const user = res.locals.user;
    const post = await Post.findByPk(req.params.postid);

    if (user === null) {
        return res.status(401).json({ message: "L'utilisateur n'éxiste pas." });
    }

    if (post === null) {
        return res.status(404).json({ message: 'Aucun post disponible.' });
    }

    const comment = await Comment.create({
        content: req.body.content,
        userId: user.id,
        postId: post.id,
    });
    return res.status(201).json(comment.toJSON());
};

exports.findAllByPost = async (req, res) => {
    // recherche à partir de l'id => renvoie tout le post
    const post = await Post.findByPk(req.params.postid);
    if (post === null) {
        return res.status(404).json({ message: 'Aucun post disponible.' });
    }

    const comments = await post.getComments({
        include: {
            model: User,
            attributes: {
                exclude: [
                    'password',
                    'mail',
                    'createdAt',
                    'updatedAt',
                    'isEnable',
                ],
            },
        },
    });
    return res.status(200).json(comments);

    /* // const comments = await post.getComments()
        identique => 
    const comments = await Comment.findAll({
        where: { postId: post.id },
    }); */
};

exports.delete = async (req, res) => {
    const comment = await Comment.findByPk(req.params.commentid);
    const user = res.locals.user;
    if (comment === null) {
        return res
            .status(404)
            .json({ message: "Ce commentaire n'éxiste pas." });
    } else if (user.id === 1) {
        await comment.destroy();
        return res
            .status(204)
            .json({ message: "L'admin a effacé ce commentaire." });
    } else if (user.id === comment.userId) {
        await comment.destroy();
        return res.status(204).send(); //* Si 204 pas de body, si 200 on peut faire un message.json({message: "Commentaire effacé."}); .
    } else {
        return res
            .status(401)
            .json({ message: 'Vous ne pouvez pas faire de suppression.' });
    }
};

// select postId
// from comment
// where comment.postId = post.id
