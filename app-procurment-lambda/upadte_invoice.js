exports.upadte_invoice = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "",
        password: ""
    });

    client.connect();
    let id = event.id;
    // delete event.id;
    let data = event;

    if (JSON.stringify(data) === '{}') {
        return null;
    }
    else {

       data= await client.query(`UPDATE invoice SET details= $1::jsonb WHERE id = $2`, [data, id]);

    }
    client.end();


    return "success";
};


