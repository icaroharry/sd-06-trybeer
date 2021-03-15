require('dotenv/config');
const mysql = require('mysql2/promise');

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'Trybeer',
};

const connection = mysql.createPool(config);
console.log('Database connection established')

module.exports = connection;
