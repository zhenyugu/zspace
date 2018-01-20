var UserSQL = {
    insert: 'INSERT INTO users(username, nickname,salt, hash, email, phone, status, createdtime) VALUES(?,?,?,?,?,?,?, now())',
    queryByUsername:'SELECT * FROM USERS WHERE USERNAME = ?',
    queryAll: 'SELECT * FROM books',
    queryByNameAndAuthor: 'SELECT * FROM BOOKS WHERE NAME=? AND AUTHOR=?',
    update: 'UPDATE BOOKS SET NAME=?, AUTHOR=? WHERE bookId=?',
    deleteById: 'DELETE FROM BOOKS WHERE bookId=?'
};
module.exports = UserSQL;
