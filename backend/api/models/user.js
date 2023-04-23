const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{type:String,required:true},
    email:{type:String, required:true, unique},
    password:{type:String,required:true}
})

module.exports=mongoose.model('Users',userSchema);