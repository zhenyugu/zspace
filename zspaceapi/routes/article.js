var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../dbconfig');
var articleSql = require('../database/articlesql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '-200', msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource, articel');
});

router.post('/', function (req, res, next) {
  pool.getConnection(function (err, connection) {
    console.log(req.body);
    var params = req.body.article;

    if (params == undefined) {
      res.send({
        code: 500,
        msg: 'add falied'
      })
    }

    console.log(params);

    connection.query(articleSql.insert, [params.title, params.articletype, params.mainbody, params.isbookarticle, params.bookhistoryid, params.status, params.userid], function (err, result) {
      if (result) {
        result = {
          code: 200,
          msg: '增加成功'
        };
      }
      else {
        console.log(err);
      }

      // 以json形式，把操作结果返回给前台页面     
      responseJSON(res, result);

      // 释放连接  
      connection.release();

    });
  });
});

module.exports = router;
