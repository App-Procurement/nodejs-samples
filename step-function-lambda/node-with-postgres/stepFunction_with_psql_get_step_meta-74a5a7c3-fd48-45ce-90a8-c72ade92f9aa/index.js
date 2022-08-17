exports.handler = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "",
        user: "postgres",
        port: 5431,
        password: "",
        database: ""
    });
    
    var token;

    client.connect();
    
    let data = await client.query(`SELECT steps_meta_data FROM usecase_input WHERE usecasename=$1`, [event.usecasename]);
    
    token = data.rows[0].tasktoken;
    
    return token ;
            
};




