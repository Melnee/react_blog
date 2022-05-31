import express, { Router } from 'express';
import controller from '../controllers/blogPost.controller';
const router = express.Router();
const app = express();


router.get("/api/blogPost/:id", controller.getBlogPost);
router.get("/api/blogPosts", controller.getBlogPosts);
router.post("/api/blogPosts/:id", controller.postBlogPost);
router.patch("/api/blogPosts/:id", controller.patchBlogPost);
router.delete("/api/blogPosts/:id", controller.deleteBlogPost);

export default router;