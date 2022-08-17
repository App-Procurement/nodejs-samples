exports.handler = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "",
        user: "postgres",
        port: 5431,
        password: "",
        database: ""
    });

    client.connect();
    
    let data = await client.query(`SELECT * FROM usecase_arn`);

    return   data.rows ;
            
};