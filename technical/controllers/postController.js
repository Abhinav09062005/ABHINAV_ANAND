import {Post} from '../models/post'
createPost=async(req,res)=>{
    try {
        const {title,content}=req.body;

        const imageURL=req.file.path;

        const newPost =new Post({title,content,imageURL,authorId: req.user.id,createdAt: new Date()
        });

        await newPost.save();
        res.status(201).json({ message: 'post created', post:newPost});
    } catch(error){
        res.status(500).json({message:'error in uploading',error:error.message});
    }
};

getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find().populate('authorId','name email'); 
        res.status(200).json(posts);
    }catch(error){
        res.status(500).json({ message:'fetching err',error:error.message});
    }
};

getPostById=async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id).populate('authorId','name email');
        if(!post){
            return res.status(404).json({message:'post not found'});
        }
        res.status(200).json(post);
    }catch(error){
        res.status(500).json({message: 'fetvhing error',error: error.message});
    }
};
export default {createPost,getAllPosts,getPostById}