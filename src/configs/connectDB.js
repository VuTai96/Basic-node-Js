import mysql from 'mysql2';
//const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

// execute will internally call prepare and query
// connection.execute(
//     'SELECT * FROM `user`',
//     function (err, results, fields) {
//         console.log('>>> Check mysql: ')
//         console.log(results); // results contains rows returned by server
//         console.log('>>> results1: ', results[0]); // results contains rows returned by server

//         //console.log(fields); // fields contains extra meta data about results, if available

//         // If you execute same statement again, it will be picked from a LRU cache
//         // which will save query preparation time and give better performance
//     }
// );
export default connection;