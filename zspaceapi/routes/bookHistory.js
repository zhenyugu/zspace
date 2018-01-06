var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../dbconfig');
var bookHistorySql = require('../database/bookHistorysql');
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
            var param = req.query || req.params;

            connection.query(bookHistorySql.queryAll, null, function (err, result) {
                res.json(result);
                // 释放连接  
                connection.release();
            });
        });
    })
    .get('/:userid', function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var params = req.params;
            //console.log(req);
            console.log(req.params);
            console.log(params.userid);
            connection.query(bookHistorySql.queryByReader, [params.userid], function (err, result) {
                console.log(result);
                res.json(result);
                // 释放连接  
                connection.release();
            });
        });
    })
    .post('/', function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var param = req.body;

            if (param == undefined) {
                res.send({
                    code: 500,
                    msg: 'add falied'
                })
            }

            connection.query(bookHistorySql.insert, [param.bookId, param.readerId, 1, false], function (err, result) {
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
    })
    .put('/', function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var params = req.body;

            if (params == undefined) {
                res.send({
                    code: 500,
                    msg: 'update falied'
                })
            }

            connection.query(bookHistorySql.update, [params.name, params.author, params.id], function (err, result) {
                if (result) {
                    result = {
                        code: 200,
                        msg: 'updated'
                    };
                }

                // 以json形式，把操作结果返回给前台页面     
                responseJSON(res, result);

                // 释放连接  
                connection.release();

            });
        });
    })
    .delete('/:id', function (req, res) {
        pool.getConnection(function (err, connection) {
            var params = req.params;
            if (params == undefined) {
                res.send({
                    code: 500,
                    msg: 'delete failed'
                })
            }

            connection.query(bookHistorySql.deleteById, [params.id], function (err, result) {
                if (result) {
                    result = {
                        code: 200,
                        msg: 'delete successfully'
                    };
                }

                // 以json形式，把操作结果返回给前台页面     
                responseJSON(res, result);

                // 释放连接  
                connection.release();

            });
        });
    });
module.exports = router;
