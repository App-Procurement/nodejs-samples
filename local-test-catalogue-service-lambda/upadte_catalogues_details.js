exports.update_catalogues_details = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "host.docker.internal",
        user: "",
        port: 5432,
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


