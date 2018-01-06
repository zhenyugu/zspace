var BookSQL = {
    insert: 'INSERT INTO books(name, author, createdTime) VALUES(?,?, now())',
    queryAll: 'SELECT * FROM books',
    queryByNameAndAuthor:'SELECT * FROM BOOKS WHERE NAME=? AND AUTHOR=?',
    update: 'UPDATE BOOKS SET NAME=?, AUTHOR=? WHERE bookId=?',
    deleteById: 'DELETE FROM BOOKS WHERE bookId=?'
};
module.exports = BookSQL;
