exports.delete_service_details = (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "host.docker.internal",
        user: "",
        port: 5432,
        password: "",
        database: "cloudassetdb"
    });

    client.connect();
    let data;
    let flag = false;
    // let id = event.deleteInput.id;

    client.query(`DELETE FROM demo WHERE id = $1`, [event.id], (err, res) => {

        if (err) {
            console.log(err);
        } else {
            console.log(res.rows);
            flag = true;
        }
        client.end();

    });
    return "success";
};


