exports.add_approvers = async (event, context, callback) => {

    event = event.body
    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "postgres",
        password: "P0$tGr3$&s3qua1$n3t!k5"
    });
    client.connect();

    let objReturn = {
        code: 200,
        message: "approvers added successfully",
        type: "object",
        object: []
    };
    try {
        if (JSON.stringify(event) === '{}') {
            return null;
        } else {
            let abc = await client.query(`SELECT * FROM approvers`);

            if (abc.rows.length > 0) {
                
                objReturn.message = "company can have only one list of approvers"

            } else {

                await client.query(`insert into approvers ("details") VALUES ($1::jsonb)`, [event]);

            }

        }

        client.end();

        return objReturn;
    } catch (e) {
        objReturn.code = 400;
        objReturn.message = e;
        client.end();
        return objReturn;
    }

};



