const db = require('../models/index.model');
const User = db.users;
const Post = db.posts;
const Comment = db.comments;

// Create post :
exports.createPost = (post) => {
    return Post.create({
        post_title: post.post_title,
        post_content: post.post_content,
        post_file: post.post_file,
        post_date: post.post_date,
    })
        .then((post) => {
            console.log('>> Created Post: ' + JSON.stringify(post, null, 4)); // Voir avec Nymous* JSON.stringify(post, null, 4)
            return post;
        })
        .catch((err) => {
            console.log('>> Error while creating tutorial: ', err);
        });
};

exports.findPostById = (postUserId_comment) => {
    return Post.findByPk(postUserId_comment)
        .then((post) => {
            return post;
        })
        .catch((err) => {
            console.log('>> Error while finding Post: ', err);
        });
};
