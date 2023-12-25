const mysql = require('mysql2');

const pool  = mysql.createPool({
    user: 'root',
    password: '',
    host: 'localhost',
    port: 3306,
    database: 'funko_test',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if(err) {
        console.log('hubo un error al conectarse con la DB');
    } else {
        console.log('conexion a la BD exitosa');
        conn.release();
    }
});
module.exports = {
    conn: pool.promise()
}