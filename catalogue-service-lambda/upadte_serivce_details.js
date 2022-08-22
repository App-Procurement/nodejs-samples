exports.upadte_serivce_details = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        user: "",
        port: 5431,
        password: "",
        database: "cloudassetdb"
    });

    client.connect();

    let id = event.id;
    delete event.id;
    let data = event;

    if (JSON.stringify(data) === '{}') {
        return null;
    }
    else {

       data= await client.query(`UPDATE demo SET details= $1::jsonb WHERE id = $2`, [data, id]);

    }

    client.end();


    return data;
};


