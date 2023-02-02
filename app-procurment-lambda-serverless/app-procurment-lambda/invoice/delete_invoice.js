exports.delete_invoice = async (event, context, callback) => {
    event = event.pathParameters

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
        message: "invoice delete successfully",
        type: "object",
        object: []
    };

    try {
        if (event.id) {

            const res = await client.query(`DELETE FROM invoice WHERE id = $1`, [event.id]);

            if (res.rowCount == 1) {

                return {
                    "statusCode": 200,
                    "headers": {
                        "Access-Control-Allow-Origin": "*"
                    },
                    "body": JSON.stringify(objReturn)
                };

            } else {

                objReturn.code = 404;
                objReturn.message = "id does not exist";

                client.end();
                return {
                    "statusCode": 404,
                    "headers": {
                        "Access-Control-Allow-Origin": "*"
                    },
                    "body": JSON.stringify(objReturn)
                };
            }

        } else {

            objReturn.code = 404;
            objReturn.message = "input json must have an 'id' field";

            client.end();
            return {
                "statusCode": 404,
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                },
                "body": JSON.stringify(objReturn)
            };
        }


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


