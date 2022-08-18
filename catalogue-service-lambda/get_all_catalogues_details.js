exports.get_all_catalogues_details = async (event, context, callback) => {

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
        data=await client.query(`SELECT * FROM demo_catalogues_detail`);
    }

    client.end();

    return data.rows;
};


