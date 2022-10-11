get_all_request = async (event, context, callback) => {

  const { Client } = require('pg');

  const client = new Client({
    host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
    port: "5431",
    database: "procurement",
    user: "",
    password: ""
  });
  client.connect();
  let data;

  data = await client.query(`SELECT * FROM request`);

  
  client.end();
  console.log(data)

  return data.rows;
};


get_all_request();