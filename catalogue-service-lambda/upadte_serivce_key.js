exports.upadte_serivce_key = async (event, context, callback) => {

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
    const filters = event;
    let keysArr = Object.keys(filters);
    let valueArr = Object.values(filters);


    for (let item of keysArr) {
        item = item.slice(0, 0) + "{" + item.slice(0);
        // item = item.slice(0, item.length) + "}" + item.slice(item.length);
        // console.log("itemitemitem",item);
        await client.query(`UPDATE demo SET details = jsonb_set(details, $1, $2)::jsonb WHERE id = $3`, [item, JSON.stringify(valueArr[keysArr.indexOf(item.slice(1, item.length - 1))]), id])

    }

    client.end();


    return "success";
};


