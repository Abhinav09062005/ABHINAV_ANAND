import mongoose from 'mongoose'
const postSchema=new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    content: {
        type:String,
        required:true,
    },
    imageURL:{
        type:String,
        required:true,
    },
    authorId:{
        type:String,
        ref:'User',
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});
const Post=mongoose.model('Post',postSchema);
module.exports=Post;