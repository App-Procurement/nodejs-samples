exports.get_all_catalogues_details = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "host.docker.internal",
        user: "",
        port: 5432,
        password: "",
        database: "cloudassetdb"
    });
    client.connect();
    let data;
    if (JSON.stringify(event) === '{}') {
        return null;
    } else {
        data = await client.query(`SELECT * FROM demo_catalogues_detail`);
    }

    client.end();

    return data.rows;
};


