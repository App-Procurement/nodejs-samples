exports.delete_currency = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "",
        password: ""
    });

    client.connect();
    let allData;
    // let id = event.deleteInput.id;
    if (JSON.stringify(event) === '{}') {
        return null;
    }
    else {
        allData = await client.query("SELECT * FROM currency");

        allData.rows[0].details.forEach((e, index) => {
            if (e.currencyId == event.currencyId) {
                allData.rows[0].details.splice(index, 1);
            }
        });
        await client.query("UPDATE currency SET details= $1 WHERE id = $2", [JSON.stringify(allData.rows[0].details), 500]);
    }

    client.end();

    return allData.rows[0].details;

};


