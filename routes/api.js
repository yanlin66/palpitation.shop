var express=require('express');
var router=express.Router();

router.post("/user/register",function (req,res,next) {
    console.log('register');
});

module.exports=router;