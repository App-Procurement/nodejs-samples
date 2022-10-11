exports.upadte_supplier = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "",
        password: ""
    });

    client.connect();
    let jsonData=event;
        let allCatalogue = await client.query(`SELECT * FROM supplier`);
        allCatalogue.rows[0].details.forEach(function (e, index, arr) {
            if (e.id == jsonData.id) {
                arr[index] = jsonData;
            }
        });
        await client.query(`UPDATE supplier SET details= $1 WHERE id = $2`, [JSON.stringify(allCatalogue.rows[0].details), 500])

    client.end();


    return "success";
};


