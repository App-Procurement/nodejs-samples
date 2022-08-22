exports.update_catalogues_details = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        user: "",
        port: 5431,
        password: "",
        database: "cloudassetdb"
    });
    client.connect();

    if (JSON.stringify(event) === '{}') {
        return null;
    } else {
        await client.query(`insert into demo_catalogues_detail (id,details) VALUES ($1::jsonb,$2::josnb)`, [500, JSON.stringify(event)]);
    }

    client.end();

    return "success";
};


