const { Client } = require('pg');

const client = new Client({

    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "nodeTest"
})

client.connect();

const name = "rakesh";
let age = 12

client.query(`insert into test2 (name , age) values($1, $2)`, [name, age], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res.rows);
    }
    client.end;
});