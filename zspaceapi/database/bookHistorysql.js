var BookHistorySQL = {
    insert: 'INSERT INTO bookHistory(bookId, readerId, status, hasArticle, createdTime) VALUES(?,?,?,?,now())',
    queryAll: 'SELECT bookhistory.*, books.*, articles.articleid FROM bookHistory left join books on bookHistory.bookId = books.bookId left join articles on articles.bookhistoryid = bookhistory.id',
    queryByHistoryId : 'SELECT bookhistory.*, books.*, articles.articleid FROM BOOKHISTORY left join books on bookHistory.bookId = books.bookId left join articles on articles.bookhistoryid = bookhistory.id where BOOKHISTORY.ID=?',
    queryByReader: 'SELECT bookhistory.*, books.*, articles.articleid FROM BOOKHISTORY left join books on bookHistory.bookId = books.bookId left join articles on articles.bookhistoryid = bookhistory.id WHERE bookHistory.readerId = ?;',
    update: 'UPDATE BOOKHISTORY SET STATUS=?, HASARTICLE=? WHERE ID=?',
    deleteById: 'DELETE FROM bookHistory WHERE id=?'
};
module.exports = BookHistorySQL;
