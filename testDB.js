const mydb = require('./mysql_db');

const db = mydb({});

db.getConnectionAsync()
.then((conn) => {
  return conn.queryAsync('Select * from Settlement');
})
.then((result) => {
  console.log(result);
  db.end();
});
