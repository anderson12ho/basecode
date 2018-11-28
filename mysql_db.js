const Promise = require('bluebird');

const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');
const Pool = require('mysql/lib/Pool');

Promise.promisifyAll(mysql);
Promise.promisifyAll(Connection.prototype);
Promise.promisifyAll(Pool.prototype);

function MysqlConnection(config) {
  const poolSettings = {
      connectionLimit: 10,
      host: 'localhost',
      port: '9000',
      database: 'mydb',
      user: config.user || 'root',
      password: config.password || 'password'

  };

  let pool = mysql.createPool(poolSettings);
  return pool;
}

module.exports = MysqlConnection;
