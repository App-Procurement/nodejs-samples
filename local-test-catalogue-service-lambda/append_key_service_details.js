exports.append_key_service_details = async (event, context, callback) => {

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
    var allDataArr = [];
    try {
        const allService = await client.query("SELECT * FROM demo");
        allDataArr = allService.rows;

        allDataArr.map(u => {
            keysArr.forEach((e, index) => {
                u.details[e] = valueArr[index];
            });
        });
        for (let i = 0; i < allDataArr.length; i++) {
            await client.query("UPDATE demo SET details= $1 WHERE id = $2", [allDataArr[i].details, allService.rows[i].id]);
        }
        
        client.end();
        
        return allService;
    } catch (err) {
        console.error(err.message);
    }
};


