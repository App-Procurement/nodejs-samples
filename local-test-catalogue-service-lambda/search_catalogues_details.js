exports.search_catalogues_details = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "host.docker.internal",
        user: "",
        port: 5432,
        password: "",
        database: "cloudassetdb"
    });
    client.connect();
    let filters = event;
    let keysArr = Object.keys(event);

    const allData = await client.query("SELECT * FROM demo_catalogues_detail");
    let allDataArr = [];

    allData.rows.forEach(e => {
        allDataArr.push(e.details.ops);
    });
    allDataArr.forEach(e => {
        let newData = [];
        keysArr.forEach(j => {

            e.cloudDashBoards.forEach(k => {
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
    // client.connect();
    // const filters = event;
    // let keysArr = Object.keys(filters);
    // let valueArr = Object.values(filters);
    // let abc;
    // for (let item of keysArr) {
    //     abc = await client.query(`SELECT * FROM demo_catalogues_detail WHERE details->$1 @> $2`, [item, JSON.stringify(valueArr[keysArr.indexOf(item)])]);
    // }

};


