const Post = require('../models/posts');

module.exports = {
    index: async (req, res) => {
        try {
            const posts = await Post.find().populate('author');
            res.json(
                posts,
            );
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    create: async (req, res) => {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.user.userId
        });
        try {
            const newPost = await post.save();
            res.status(201).json(newPost);
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    show: (req, res) => {
        res.send(res.post)
    },
    update: async (req, res) => {
        if (req.body.title != null) {
            res.post.title = req.body.title;
        }
        if (req.body.content != null) {
            res.post.content = req.body.content;
        }
        try {
            const updatePost = await res.post.save();
            res.json(updatePost);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    },
    delete: async (req, res) => {
        try {
            await res.post.remove();
            res.json({
                message: 'Deleted post'
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

}