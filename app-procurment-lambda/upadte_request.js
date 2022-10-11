exports.upadte_request = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "",
        password: ""
    });

    client.connect();

    let objReturn = {
        code: 200,
        message: "successfully updated",
        type: "object",
        object: []
    };
    
    try {

        if (JSON.stringify(event) === '{}') {
            return null;
        }
        else {
            
            let id = event.id;
            delete event.id;
            let data = event;
            await client.query(`UPDATE request SET details= $1::jsonb WHERE id = $2`, [data, id]);

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


