let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lime2005',
  database: 'philsecure-pa'
})

connection.connect(function(err){
  if (err){
      return console.error('Error:' + err.message);
  }
  console.log('Connected to the MySQL Server.');
});

/* connection.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});

 */