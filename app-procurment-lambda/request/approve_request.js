exports.approve_request = async (event, context, callback) => {

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
        message: "request approved successfully",
        type: "object",
        object: []
    };

    const roleReturn = {
        admin: 1000,
        generalDirector: 5000,
        superAdmin: 2000
    };

    const roleNames = Object.keys(roleReturn);

    try {

        if (event.id && event.role && event.price) {

            if (roleNames.includes(event.role)) {

                if (roleReturn[event.role] >= event.price) {

                    const res = await client.query(`UPDATE request SET details = jsonb_set(details, '{status}', '"approved"') WHERE id=$1`, [event.id]);

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

                    objReturn.code = 401;
                    objReturn.message = "you are not authorised";

                    client.end();

                    return {
                        "statusCode": 401,
                        "headers": {
                            "Access-Control-Allow-Origin": "*"
                        },
                        "body": JSON.stringify(objReturn)
                    };

                }

            } else {
                objReturn.code = 400;
                objReturn.message = "role does not exist";

                client.end();
                return {
                    "statusCode": 400,
                    "headers": {
                        "Access-Control-Allow-Origin": "*"
                    },
                    "body": JSON.stringify(objReturn)
                };
            }

        } else {
            objReturn.code = 404;
            objReturn.message = "input json must have an 'id' & 'role' & 'price' field";

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

        objReturn.code = 404;
        objReturn.message = e;
        client.end();
        return {
            "statusCode": 404,
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(objReturn)
        };
    }
};



