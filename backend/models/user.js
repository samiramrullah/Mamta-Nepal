const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{type:String,required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String,required:true},
    isFirstTime:{type:Boolean,default:true},
    deliveryDate:{type:Date},
    DOB:{type:Date},
    weight:{type:Number},
    height:{type:Number},
    NoOfChildren:{type:Number},
    gender:{type:String},
    userType:{type:String},
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]

})

module.exports=mongoose.model('Users',userSchema);