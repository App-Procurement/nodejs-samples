exports.add_service_details = async (event, context, callback) => {
  const { Client } = require('pg');

  // console.log("add service", event)

  const client = new Client({
    host: "host.docker.internal",
    user: "",
    port: 5432,
    password: "",
    database: "cloudassetdb"
  });
  client.connect();
  // let data;
  if (JSON.stringify(event) === '{}') {
    return null;
  } else {
    await client.query(`insert into demo ("details") values($1::jsonb)`, [event]);
  }

  client.end();

  return event;
};


