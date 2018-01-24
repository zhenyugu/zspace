var ArticleSQL = {
    insert: 'INSERT INTO articles(title,articletype, mainbody,isbookarticle,bookhistoryid,status,userid, createdtime,lastupdatedtime) VALUES(?,?,?,?,?,?,?,now(), now())',
    queryAll: 'SELECT * FROM books',
    queryByNameAndAuthor: 'SELECT * FROM BOOKS WHERE NAME=? AND AUTHOR=?',
    update: 'UPDATE BOOKS SET NAME=?, AUTHOR=? WHERE bookId=?',
    deleteById: 'DELETE FROM BOOKS WHERE bookId=?'
};
module.exports = ArticleSQL;
