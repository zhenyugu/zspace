var express = require('express');
var hash = require('pbkdf2-password')()
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
var dbConfig = require('../dbconfig');
var userSql = require('../database/usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

// 响应一个JSON数据
var responseJSON = function (res, ret) {
  console.log(ret);
  if (typeof ret === 'undefined') {
    res.json({
      code: '-200', msg: '操作失败'
    });
  } else {    
    res.json(ret);
  }
};

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function (req, res, next) {
  var params = req.body;
  console.log(params);
  
  if (params === undefined) {
    res.send({
      code: 500,
      msg: 'add falied'
    })
  }

  hash({ password: params.password }, function (err, pass, salt, hash) {
    console.log(11111);
    if (err) throw err;
    // store the salt & hash in the "db"

    pool.getConnection(function (err, connection) {
      console.log(userSql.insert);
      console.log(params);
      connection.query(userSql.insert, [params.username, params.nickname, salt, hash, params.email, params.phonenumber, 0], function (err, result) {
        if (result) {
          result = {
            code: 200,
            msg: '增加成功'
          };
        }

        // 以json形式，把操作结果返回给前台页面     
        responseJSON(res, result);

        // 释放连接  
        connection.release();
      });
    });
  });
});

module.exports = router;
