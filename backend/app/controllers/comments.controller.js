const { Comment, Post, User } = require('../models/index.model.js');

exports.create = async (req, res) => {
    const user = await User.findByPk(req.body.id);
    const post = await Post.findByPk(req.params.postid);

    if (user === null) {
        return res
            .status(401)
            .json({ message: "L'utilisateur n'éxiste pas. " });
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
