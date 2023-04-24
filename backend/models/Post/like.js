const mongoose=require('mongoose')

const likeSchema = new mongoose.Schema({
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

module.exports=mongoose.model('Like',likeSchema)