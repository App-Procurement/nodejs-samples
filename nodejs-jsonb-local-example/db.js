const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'postgres', // default postgres
    password: 'postgres', //added during PostgreSQL and pgAdmin installation
    database: 'cloudassetdb', // `services_db`
    host: 'localhost',
    port: '5432' //default port
});


module.exports = pool;