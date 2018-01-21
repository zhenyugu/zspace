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
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  var params = req.body;

  if (params == undefined) {
    res.send({
      code: 500,
      msg: 'please input username/password!'
    })
  }

  pool.getConnection(function (err, connection) {
    connection.query(userSql.queryByUsername, [params.username], function (err, result) {
      if (result && result.length === 0) {
        result = {
          code: 500,
          msg: 'the account does not exists!'
        };
        return responseJSON(res, result);
      }

      else if (result && result.length === 1) {
        var user = result[0];
        hash({ password: params.password, salt: user.salt }, function (err, pass, salt, hash) {
          if (hash !== user.hash) {
            result = {
              code: 500,
              msg: 'password is incorrect!'
            };
          }

          // 以json形式，把操作结果返回给前台页面     
          return responseJSON(res, result);
        });
      }

      // 释放连接  
      connection.release();
    });
  });
});

function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/');
  }
}

// router.post('/', function (req, res) {
//   authenticate(req.body.username, req.body.password, function (err, user) {
//     if (user) {
//       // Regenerate session when signing in
//       // to prevent fixation
//       req.session.regenerate(function () {
//         // Store the user's primary key
//         // in the session store to be retrieved,
//         // or in this case the entire user object
//         req.session.user = user;
//         req.session.success = 'Authenticated as ' + user.name
//           + ' click to <a href="/logout">logout</a>. '
//           + ' You may now access <a href="/restricted">/restricted</a>.';
//         //res.redirect('back');
//         res.send(req.session);
//       });

//       //res.send(req.session);
//     } else {
//       req.session.error = 'Authentication failed, please check your '
//         + ' username and password.'
//         + ' (use "tj" and "foobar")';
//       res.redirect('/login');
//     }
//   });
// });

router.get('/logout', function (req, res) {
  // destroy the user's session to log them out
  // will be re-created next request
  req.session.destroy(function () {
    res.redirect('/');
  });
});
module.exports = router;
