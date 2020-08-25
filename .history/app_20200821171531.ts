
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import indexRouter from './src/routes/index';
import expressLayouts from 'express-ejs-layouts';

var app = express();

/** 设置数据库连接 */ 
var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/mini_program?retryWrites=true'
//var mongoDB = process.env.MONGODB_URI || dev_db_url;
var mongoDB = 'mongodb://localhost/mini_program' || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/** 设置模板 */
app.set('views', path.join(__dirname, './src/views'));
app.engine('html', require('ejs').__express); 
app.set('view engine', 'html');
app.use(expressLayouts);
app.set('layout', 'navLayout');
app.set("view options",{                                                                                          
  "layout":false
});


/** 设置路由 */
app.use('/', indexRouter);

/** 抛出错误 */
app.use(function(req, res, next) {
  next(createError(404));
});

/** 错误处理 */
app.use(function(err, req, res, next) {
  // 设置错误页面传值信息
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
