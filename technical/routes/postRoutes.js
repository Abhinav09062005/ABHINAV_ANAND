import express from 'express';
import {createPost, getAllPosts, getPostById} from '../controllers/postController'
const upload=require('../middleware/uploadMiddleware');
const router=express.Router();

router.post('/blog', upload.single('image'), createPost);
router.get('/blogs', getAllPosts);
router.get('/blogs/:id', getPostById);

module.exports=router;