exports.approve_request = async (event, context, callback) => {

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
        data= await client.query(`UPDATE request SET details= $1::jsonb WHERE id = $2`, [data, id]);
    }

    client.end();

    return data;
};



