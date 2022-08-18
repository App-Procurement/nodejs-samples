exports.delete_catalogues_details = async(event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        user: "",
        port: 5431,
        password: "",
        database: "cloudassetdb"
    });

    client.connect();
    let allData;
    // let id = event.deleteInput.id;
    if (JSON.stringify(event) === '{}') {
        return null;
    }
    else {
         allData = await client.query("SELECT * FROM demo_catalogues_detail");

        allData.rows[0].details.ops.cloudDashBoards.forEach((e, index) => {
            console.log("element",e.id);
            if (e.id == event.id) {
                allData.rows[0].details.ops.cloudDashBoards.splice(index, 1);
            }
        });
        await client.query("UPDATE demo_catalogues_detail SET details= $1 WHERE id = $2", [JSON.stringify(allData.rows[0].details), 500]);
    }
    console.log("i am here",allData.rows[0].details)
    client.end();

    return allData.rows[0].details;

};


