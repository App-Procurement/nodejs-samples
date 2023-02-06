exports.search_contact = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user:"postgres",
        password: "P0$tGr3$&s3qua1$n3t!k5"
    });
    client.connect();
    
    let data = {};
    
    if ( event.queryStringParameters) {
        data =  event.queryStringParameters;
    }
    
    const filters = data;
    
    let keysArr = Object.keys(filters);
    let valueArr = Object.values(filters);
    let abc;
    let objReturn = {
        code: 200,
        message: "contact search successfully",
        type: "object",
        object: []
    };

    try {
        if (JSON.stringify(data) === '{}') {

            abc = await client.query(`SELECT * FROM contact`);
        } else if (data.id) {

            abc = await client.query(`SELECT * FROM contact WHERE id=$1`, [data.id]);
        }
        else {

            for (let item of keysArr) {

                abc = await client.query(`SELECT * FROM contact WHERE details->$1 @> $2`, [item, JSON.stringify(valueArr[keysArr.indexOf(item)])]);
            }

        }
        objReturn.object = abc.rows;
        client.end();

        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin":"*"
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
                "Access-Control-Allow-Origin":"*"
            },
            "body": JSON.stringify(objReturn) 
        };

    }

};


