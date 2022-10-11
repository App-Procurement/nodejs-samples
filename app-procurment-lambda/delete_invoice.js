exports.delete_invoice = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "",
        password: ""
    });

    client.connect();

    if (JSON.stringify(event) === '{}') {
        return null;
    }
    else{
        await client.query(`DELETE FROM invoice WHERE id = $1`, [event.id])
    }

    client.end();

    return "success";

};


