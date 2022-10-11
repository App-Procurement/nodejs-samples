exports.add_purchase_order = async (event, context, callback) => {

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
        data=await client.query(`insert into purchase_order ("details") VALUES ($1::jsonb)`, [event]);
    }

    client.end();

    return data;
};


