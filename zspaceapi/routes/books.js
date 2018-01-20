var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../dbconfig');
var bookSql = require('../database/booksql');
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

            if (params != null) {
                connection.query(bookSql.queryByNameAndAuthor, [params.name, params.author], function (err, result) {
                    res.json(result);
                    // 释放连接  
                    connection.release();
                });
            }
            else {

                connection.query(bookSql.queryAll, null, function (err, result) {
                    res.json(result);
                    // 释放连接  
                    connection.release();
                });
            }
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

            connection.query(bookSql.insert, [param.name, param.author], function (err, result) {
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

            connection.query(bookSql.update, [params.name, params.author, params.id], function (err, result) {
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

            connection.query(bookSql.deleteById, [params.id], function (err, result) {
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
