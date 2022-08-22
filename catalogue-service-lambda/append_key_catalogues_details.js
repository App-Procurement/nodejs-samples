exports.append_key_catalogues_details = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        user: "",
        port: 5431,
        password: "",
        database: "cloudassetdb"
    });
    client.connect();


    const jsonData = event;
    let keysArr = Object.keys(jsonData);
    let valueArr = Object.values(jsonData);
    let allDataArr = [];
    let data;

    const allTodo = await client.query("SELECT * FROM demo_catalogues_detail");
    allDataArr = allTodo.rows[0].details.ops.cloudDashBoards;

    allDataArr.map(u => {
        keysArr.forEach((e, index) => {
         u[e] = valueArr[index];
        });

    });
    await client.query("UPDATE demo_catalogues_detail SET details= $1 WHERE id = $2", [allTodo.rows[0].details,500]);
   
    client.end();
    
    return allTodo.rows[0].details;
};


