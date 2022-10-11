exports.search_purchase_order = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "",
        password: ""
    });
    client.connect();
    const filters = event;
    let keysArr = Object.keys(filters);
    let valueArr = Object.values(filters);
    let abc;

    if (JSON.stringify(event) === '{}') {

        abc = await client.query(`SELECT * FROM purchase_order`);
    }
    else {

        for (let item of keysArr) {

            abc = await client.query(`SELECT * FROM demo WHERE details->$1 @> $2`, [item, JSON.stringify(valueArr[keysArr.indexOf(item)])]);


        }
    }
    client.end();

    return abc.rows;

};


