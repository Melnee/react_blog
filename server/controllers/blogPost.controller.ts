const BlogPost = require("../models/blogPost.model");

const getBlogPost = (req, res) => {
  BlogPost.find((id) => id === req.params.id)
    .then(blogPost => res.json({blogPost}))
    .catch(error => res.json({ message: "Something went wrong", error}));
}

const getBlogPosts = (req, res) => {
  BlogPost.find()
    .then(blogPosts => res.json({blogPosts}))
    .catch(error => res.json({ message: "Something went wrong", error}));
}

const postBlogPost = (req, res) => {
  BlogPost.create(req.body)
    .then(blogPost => res.json({blogPost}))
    .catch(error => res.json({ message: "Something went wrong", error}));
}

const patchBlogPost = (req, res) => {
  BlogPost.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(blogPost => res.json({blogPost}))
    .catch(error => res.json({ message: "Something went wrong", error}));
}

const deleteBlogPost = (req, res) => {
  BlogPost.deleteOne({ _id: req.params.id })
    .then(blogPost => res.json({blogPost}))
    .catch(error => res.json({ message: "Something went wrong", error}));
}

export default { getBlogPost, getBlogPosts, postBlogPost, patchBlogPost, deleteBlogPost };
