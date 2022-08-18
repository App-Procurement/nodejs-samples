exports.search_service_details = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        user: "",
        port: 5431,
        password: "",
        database: "cloudassetdb"
    });
    client.connect();
    const filters = event;
    let keysArr = Object.keys(filters);
    let valueArr = Object.values(filters);
    let abc;
    for (let item of keysArr) {
        abc = await client.query(`SELECT * FROM demo WHERE details->$1 @> $2`, [item, JSON.stringify(valueArr[keysArr.indexOf(item)])]);
    }
    client.end();

    return abc.rows;
};


