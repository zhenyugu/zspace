var BookSQL = {
    insert: 'INSERT INTO books(name, author) VALUES(?,?)',
    queryAll: 'SELECT * FROM books',
    update: 'UPDATE BOOKS SET NAME=?, AUTHOR=? WHERE ID=?',
    deleteById: 'DELETE FROM BOOKS WHERE id=?'
};
module.exports = BookSQL;
