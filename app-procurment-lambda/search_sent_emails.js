exports.search_sent_emails = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "postgres",
        password: "P0$tGr3$&s3qua1$n3t!k5"
    });

    client.connect();

    let data = {};

    if (event.queryStringParameters) {
        data = event.queryStringParameters;
    }


    let abc;
    let objReturn = {
        code: 200,
        message: "sentEmails search successfully",
        type: "object",
        object: []
    };

    try {


        if (data.from) {
            abc = await client.query(`SELECT * FROM sent_emails WHERE details->'from' @> $1`, [JSON.stringify(data.from)]);
        }else{
            objReturn.code = 404;
            objReturn.message = "params must have 'from' field";
            return {
                "statusCode": 404,
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                },
                "body": JSON.stringify(objReturn)
            };    
        }

        objReturn.object = abc.rows;
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


