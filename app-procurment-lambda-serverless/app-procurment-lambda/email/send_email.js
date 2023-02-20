exports.send_email = async (event, context, callback) => {
    const AWS = require("@aws-sdk/client-ses");
    event = JSON.parse(event.body)

    const { Client } = require('pg');

    const client = new Client({
        host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "postgres",
        password: "P0$tGr3$&s3qua1$n3t!k5"
    });

    client.connect();

    let objReturn = {
        code: 200,
        message: "email sent successfully",
        type: "object",
        object: []
    };

    try {
        const ses = new AWS.SES({
            "accessKeyId": "AKIAZSLS3RLMX72WGAMX",
            "secretAccessKey": "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",
            "region": "us-east-1"
        });

        if (event.from && event.to && event.content && event.subject) {

            const finalContent = event.attachment ? `<div>${event.content}</div>
            <p>Attachment: ${event?.attachment}</p>` : `<div>${event.content}</div>`;

            var params = {
                Destination: { /* required */
                    ToAddresses: event.to
                },
                Message: { /* required */
                    Body: { /* required */
                        Html: {
                            Data: finalContent, /* required */
                        },
                        Text: {
                            Data: 'TEXT', /* required */
                        }
                    },
                    Subject: { /* required */
                        Data: event.subject, /* required */
                    }
                },
                Source: event.from, /* required */

                Tags: [
                    {
                        Name: 'PROCURMENT', /* required */
                        Value: 'PROCURMENT' /* required */
                    },
                    /* more items */
                ]
            };

            const res = await ses.sendEmail(params);

            if (res.$metadata.httpStatusCode == 200) {

                let abc = await client.query(`SELECT * FROM sent_emails WHERE details->'from' @> $1`, [JSON.stringify(event.from)]);

                if (abc.rows.length == 0) {

                    const obj = {
                        "from": event.from,
                        "emails": [
                            {
                                "to": event.to,
                                "content": event.content,
                                "subject": event.subject
                            }
                        ]
                    };
                    await client.query(`insert into sent_emails ("details") VALUES ($1::jsonb)`, [obj]);
                    client.end();

                } else {
                    const obj = {
                        "to": event.to,
                        "content": event.content,
                        "subject": event.subject
                    };
                    abc.rows[0].details.emails.push(obj);
                    await client.query(`UPDATE sent_emails SET details= $1::jsonb WHERE id = $2`, [abc.rows[0].details, abc.rows[0].id]);
                    client.end();

                }

                return objReturn;

            } else {
                objReturn.code = 400;
                objReturn.message = "Something went wrong";
                return objReturn;
            }

        } else {
            objReturn.code = 802;
            objReturn.message = "input json must have 'from', 'to', 'content', 'subject' fields";
            return objReturn;
        }

    } catch (e) {
        objReturn.code = 400;
        objReturn.message = e;
        return objReturn;
    }
};

