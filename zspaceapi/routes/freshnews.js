var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../dbconfig');
var freshnewsSql = require('../database/freshnewssql');
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

router
    .get('/', function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var params = req.query || req.params;

            connection.query(freshnewsSql.queryAll, [], function (err, result) {
                res.json(result);
                // 释放连接  
                connection.release();
            });
        });
    })