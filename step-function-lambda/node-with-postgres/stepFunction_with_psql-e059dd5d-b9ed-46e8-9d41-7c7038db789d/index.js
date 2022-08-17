exports.handler = (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "",
        user: "postgres",
        port: 5431,
        password: "",
        database: ""
    });

        
        client.connect();
        
        let flag = false;

        client.query(`insert into public.usecase_arn ("usecasename" , "executionarn") values($1, $2)`, [event.usecaseName, event.executionArn], (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log(res.rows);
                  flag = true;
                client.end();
            }
            
        });
    
        
        if (!flag) {
            
            client.query(`UPDATE public.usecase_arn SET executionarn=$1 WHERE usecasename=$2`, [event.executionArn, event.usecaseName], (err, res) => {
                   
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.rows);
                    flag = true;
                }
                
                client.end();
                
            });
            
        }
      
    
    

    return "success"; 
};


