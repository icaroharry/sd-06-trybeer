const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '1234',
  host: 'localhost',
  database: 'trybeer',
});

module.exports = connection;
