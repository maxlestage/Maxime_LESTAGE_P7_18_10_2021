const { Post, User } = require('../models/index.model');
const { post } = require('../routes/post.route');

// Create and Save a new Post
exports.create = async (req, res) => {
    const date = new Date();
    // const user = await User.findByPk(req.body.userId);
    const user = res.locals.user;
    if (user === null) {
        return res.status(401).json({ message: "l'utilisateur n'existe pas." });
    }

    if (!req.file) {
        const post = await user.createPost({
            // On crée un post appartenant à ce user en particulier
            title: req.body.title,
            content: req.body.content,
            date: date,
        });
        return res.status(201).json(post.toJSON());
    }
    const post = await user.createPost({
        // On crée un post appartenant à ce user en particulier
        title: req.body.title,
        content: req.body.content,
        file: req.file.filename,
        date: date,
    });

    return res.status(201).json(post.toJSON());
};

// Find a single Posts with an id
exports.findOne = async (req, res) => {
    const post = await Post.findByPk(req.params.id, {
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
    if (post === null) {
        return res.status(404).json({ message: "Ce post n'éxiste pas." });
    }
    return res.status(200).json(post.toJSON());
};

// Retrieve all Posts from the database.
exports.findAll = async (req, res) => {
    const posts = await Post.findAll({
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
    return res.status(200).json(posts);
};

// Update a Posts by the id in the request
exports.update = async (req, res) => {
    const date = new Date();

    const post = await Post.findByPk(req.params.id);
    if (post === null) {
        return res.status(404).json({ message: "Ce post n'éxiste pas." });
    }

    const user = res.locals.user;

    if (user.id === post.userId) {
        const updatePost = await post.update({
            title: req.body.title,
            content: req.body.content,
            file: req.body.file,
            date: date,
        });
        return res.status(200).json(updatePost.toJSON());
    } else {
        return res
            .status(401)
            .json({ message: 'Vous ne pouvez pas faire de modifications.' });
    }
};

// Delete a Posts with the specified id in the request
exports.delete = async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    const user = res.locals.user;

    if (post === null) {
        return res.status(404).json({ message: "Ce post n'éxiste pas." });
    } else if (user.id === 1) {
        await post.destroy();
        return res.status(204).json({ message: "L'admin a effacé ce post." });
    } else if (user.id === post.userId) {
        await post.destroy();
        return res.status(204).send(); //* Si 204 pas de body, si 200 on peut faire un message.json({message: "Post effacé."}); .
    } else {
        return res
            .status(401)
            .json({ message: 'Vous ne pouvez pas faire de suppression.' });
    }
};
