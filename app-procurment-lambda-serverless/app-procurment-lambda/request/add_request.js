exports.add_request = async (event, context, callback) => {


    event = JSON.parse(event.body)

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
        message: "request added successfully",
        type: "object",
        object: []
    };

    // console.log(event.body == null, event.body, JSON.stringify(event.body) == "{}")
    try {

        if (JSON.stringify(event) == '{}') {

            objReturn.code = 400
            objReturn.message = "body is null"
            client.end();

            return {
                "statusCode": 400,
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                },
                "body": JSON.stringify(objReturn)
            };

        } else {
            const res = await client.query(`insert into request ("details") VALUES ($1::jsonb)`, [event]);

        }

        client.end();
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(objReturn)
        };

    } catch (e) {
        objReturn.code = 400;
        objReturn.message = e;
        client.end();
        return {
            "statusCode": 400,
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(objReturn)
        };
    }

};



