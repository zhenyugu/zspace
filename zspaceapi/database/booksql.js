var BookSQL = {
    insert: 'INSERT INTO books(name, author) VALUES(?,?)',
    queryAll: 'SELECT * FROM books',
    getUserById: 'SELECT * FROM books WHERE uid = ? ',
};
module.exports = BookSQL;
