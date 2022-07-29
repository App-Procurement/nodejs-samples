exports.handler = (event, context, callback) => {

    const AWS = require('aws-sdk')

    const credentials = {
        region: 'us-east-1',
        accessKeyId: "AKIAZSLS3RLM47NJTEMD",
        secretAccessKey: "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"
    }

    var dynamodb = new AWS.DynamoDB(credentials);

    var paramsForDb = {
        TableName: "stepfunction-uc1-2",
        Item: {
            "execution_arn": { S: event.executionArn },
            "task_token": { S: event.token }
        }
    };

    dynamodb.putItem(paramsForDb, function (err, data) {
        if (err) {
            console.error("Unable to write data: ", JSON.stringify(err, null, 2));
        } else {
            console.log("Put arn succeeded");
        }
    });

    return "succsss";
};


