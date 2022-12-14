exports.upadte_purchase_order = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user:"postgres",
        password: "P0$tGr3$&s3qua1$n3t!k5"
    });

    client.connect();

    let objReturn = {
        code: 200,
        message: "purchase order successfully updated",
        type: "object",
        object: []
    };

    try {

        if (event.id) {

            const res = await client.query(`UPDATE purchase_order SET details= $1::jsonb WHERE id = $2`, [event.details, event.id]);

            if (res.rowCount == 1) {

                return objReturn;

            } else {

                objReturn.code = 801;
                objReturn.message = "id does not exist";

                client.end();
                return objReturn;
            }

        }

    } catch (e) {

        objReturn.code = 400;
        objReturn.message = e;
        client.end();
        return objReturn;
    }


};


