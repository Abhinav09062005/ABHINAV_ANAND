import express from 'express';
import {createPost, getAllPosts, getPostById} from '../controllers/postController'
import {authMiddleware} from '../middleware/middleware.js'

const router=express.Router();

router.post('/blog', authMiddleware, upload.single('image'), createPost);
router.get('/blogs', getAllPosts);
router.get('/blogs/:id', getPostById);


export default router;


