"use strict";
var cookieSession = require('cookie-session');
var express=require('express');
var ejs=require('ejs');
var mongodb=require('mongodb');
var mongoose=require('mongoose');
var app=express();

app.set("views","./views");
app.set("view engine","ejs");

app.use('/admin',require('./routes/admin'));
app.use('/api',require('./routes/api'));
app.use('/',require('./routes/main'));

module.exports.app=app;



