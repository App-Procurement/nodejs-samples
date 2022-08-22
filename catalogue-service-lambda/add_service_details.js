exports.add_service_details = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        user: "",
        port: 5431,
        password: "",
        database: "cloudassetdb"
    });
    client.connect();
    let data;
    if (JSON.stringify(event) === '{}') {
        return null;
    } else {
        data = await client.query(`insert into demo ("details") values($1::jsonb)`, [event]);
    }

    client.end();

    return data;
};


