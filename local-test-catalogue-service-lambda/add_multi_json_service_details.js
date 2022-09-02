exports.add_multi_json_service_details = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "host.docker.internal",
        user: "",
        port: 5432,
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

            data = await client.query("insert into demo (details) values($1::jsonb)", [JSON.stringify(el)]);

        }
    }

    client.end();

    return data;
};


