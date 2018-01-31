var BookHistorySQL = {
    insert: 'INSERT INTO bookHistory(bookId, readerId, status, hasArticle, createdTime) VALUES(?,?,?,?,now())',
    queryAll: 'SELECT * FROM bookHistory right join books on bookHistory.bookId = books.bookId',
    queryByHistoryId : 'SELECT * FROM BOOKHISTORY inner join books on bookHistory.bookId = books.bookId AND BOOKHISTORY.ID=?',
    queryByReader: 'SELECT * FROM BOOKHISTORY right join books on bookHistory.bookId = books.bookId WHERE bookHistory.readerId = ?;',
    update: 'UPDATE BOOKHISTORY SET STATUS=?, HASARTICLE=? WHERE ID=?',
    deleteById: 'DELETE FROM bookHistory WHERE id=?'
};
module.exports = BookHistorySQL;
