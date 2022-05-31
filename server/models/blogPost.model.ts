import mongoose from '../imports';

const BlogPostSchema = new mongoose.Schema({
  id: Number,
  date: Date,
  title: String,
  body: String,
  category: String, // possibly change to enum, or just store as string and use reference table
  author: String,
  slug: String
})