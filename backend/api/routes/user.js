const express=require('express')
const router=express.Router();

router.get('/register',(req,res,next)=>{
    res.status(200).json({
        message:'Post Route'
    })
})

module.exports=router;