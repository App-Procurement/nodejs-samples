exports.add_multi_json_service_details = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        user: "",
        port: 5431,
        password: "",
        database: "cloudassetdb"
    });
    client.connect();

    let data = event;


    if (JSON.stringify(data) === '{}') {
        return null;
    }
    else {
        for (const el of data) {

           data= await client.query("insert into demo (details) values($1::jsonb)", [JSON.stringify(el)]);

        }
    }

    client.end();

    return data;
};


