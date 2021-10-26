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

    const comments = await post.getComments();
    return res.status(200).json(comments);

    /* // const comments = await post.getComments()
        identique => 
    const comments = await Comment.findAll({
        where: { postId: post.id },
    }); */
};

// select postId
// from comment
// where comment.postId = post.id
