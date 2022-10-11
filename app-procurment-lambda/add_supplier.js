exports.add_supplier = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
       host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "",
        password: ""
    });
    client.connect();
    let data;
    if (JSON.stringify(event) === '{}') {
        return null;
    } else {
        data=await client.query(`insert into supplier (id,details) VALUES ($1,$2)`, [500, JSON.stringify(event)]);
    }

    client.end();

    return data;
};


