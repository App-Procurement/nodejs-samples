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
    

    const first = "{stages," + event.stepInput.index + "}";

    if (event.stepInput) {
        
        try {
            
            await client.query(`insert into public.usecase_input ("usecasename" , "stepinput") values($1, $2)`, [event.usecaseName, event.stepInput]);

        } catch (error) {
    
            let a = await client.query(`UPDATE usecase_input SET stepinput = jsonb_set(stepinput, $1, $2 )::jsonb WHERE usecasename = $3`, [first, event.stepInput, event.usecaseName]);
            console.log("return:- ",a);
        }
    }
    
    

    
    client.end();

    return "succsss";
};


