var ArticleSQL = {
    insert: 'INSERT INTO articles(title,articletype, mainbody,isbookarticle,bookhistoryid,status,userid, createdtime,lastupdatedtime) VALUES(?,?,?,?,?,?,?,now(), now())',
    queryById:'SELECT * FROM ARTICLES WHERE ARTICLEID=?',
    queryByBookHistoryId: 'SELECT * FROM ARTICLES WHERE BOOKHISTORYID=?',
    queryByUserid:'SELECT * FROM ARTICLES WHERE USERID=?',
    queryAll: 'SELECT * FROM ARTICLES',
    queryByNameAndAuthor: 'SELECT * FROM BOOKS WHERE NAME=? AND AUTHOR=?',
    update: 'UPDATE BOOKS SET NAME=?, AUTHOR=? WHERE bookId=?',
    deleteById: 'DELETE FROM BOOKS WHERE bookId=?'
};
module.exports = ArticleSQL;
