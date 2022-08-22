exports.delete_service_details = (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        user: "",
        port: 5431,
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


