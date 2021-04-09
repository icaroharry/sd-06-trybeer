const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log(process.env.HOSTNAME)

module.exports = {
  "development": {
    "username":  process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": "Trybeer",
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": "Trybeer",
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": "Trybeer",
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  }
};
