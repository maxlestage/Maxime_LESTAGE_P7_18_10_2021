const { Post, User } = require('../models/index.model');

// Create and Save a new Post
exports.create = async (req, res) => {
    const date = new Date();
    const user = await User.findByPk(req.body.userId);
    if (user === null) {
        return res.status(401).json({ message: "l'utilisateur n'existe pas." });
    }
    // console.log(user);
    const post = await user.createPost({
        // On crée un post appartenant à ce user en particulier
        title: req.body.title,
        content: req.body.content,
        file: req.body.file,
        date: date,
    });
    console.log('je suis ici post Validé');
    return res.status(201).json(post.toJSON());
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (post === null) {
        return res.status(404).json({ message: "Ce post n'éxiste pas." });
    }
    return res.status(200).json(post.toJSON());
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
    const posts = await Post.findAll();
    return res.status(200).json(posts);
};

// Update a Tutorial by the id in the request
exports.update = async (req, res) => {
    const date = new Date();
    const post = await Post.findByPk(req.params.id);
    if (post === null) {
        return res.status(404).json({ message: "Ce post n'éxiste pas." });
    }
    const updatePost = await post.update({
        title: req.body.title,
        content: req.body.content,
        file: req.body.file,
        date: date,
    });
    return res.status(200).json(updatePost.toJSON());
};

// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (post === null) {
        return res.status(404).json({ message: "Ce post n'éxiste pas." });
    }
    await post.destroy();
    return res.status(204).send(); //* Si 204 pas de body, si 200 on peut faire un message.json({message: "Post effacé."}); .
};
