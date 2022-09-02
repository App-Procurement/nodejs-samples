exports.append_key_catalogues_details = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "host.docker.internal",
        user: "",
        port: 5432,
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


