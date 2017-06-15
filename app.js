"use strict";
// var cookieSession = require('cookie-session');
var express=require('express');
var swig=require('swig');
var mongoose=require('mongoose');
var app=express();

//配置应用模板
//定义当前应用使用的模板引擎
app.engine('html',swig.renderFile);
//定义模板引擎，使用swig.renderFile方法解析后缀为html的文件
app.set("views","./views");
//设置模板存放的路径
app.set("view engine","html");
//注册模板引擎
swig.setDefaults({cache:false});


/*
*根据不同功能划分模块
 */
app.use('/admin',require('./routes/admin'));
app.use('/api',require('./routes/api'));
app.use('/',require('./routes/main'));


// app.get("/",function (req,res,next) {
//     // res.send("<h1>欢迎光临</h1>>");
//     res.render('index');
// })
app.listen(8080);
// mongoose.connect('mongodb://localhost:27017',function (error) {
//     if(error){
//         console.log('链接失败');
//     }else{
//         console.log('链接成功');
//         app.listen(8080)
//     }
// });
module.exports.app=app;



