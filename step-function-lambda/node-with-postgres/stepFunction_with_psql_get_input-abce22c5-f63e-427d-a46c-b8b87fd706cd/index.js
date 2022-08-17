exports.handler = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "",
        user: "postgres",
        port: 5431,
        password: "",
        database: ""
    });
    
    // var token;

    client.connect();
    
    let data = await client.query(`SELECT * FROM usecase_input`);
    
    // let usecasename1 = [];
    
    // data.rows
    // .forEach(e => {
    //     usecasename1.push(e);
    // })
    
    return   data.rows ;
            
};