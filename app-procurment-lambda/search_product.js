exports.search_product = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "",
        password: ""
    });
    client.connect();
    let filters = event;
    let keysArr = Object.keys(event);

    const allData = await client.query("SELECT * FROM product");
    let allDataArr = [];

    allData.rows.forEach(e => {
        allDataArr.push(e.details);
    });
    allDataArr.forEach(e => {
        let newData = [];
        keysArr.forEach(j => {

            e.forEach(k => {
                if (k[j] == filters[j]) {
                    newData.push(k);
                }
            });
        });
        allDataArr = [];
        allDataArr = newData;

    });
    client.end();

    return allDataArr;
};


