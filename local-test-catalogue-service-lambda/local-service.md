# Catalogue-Service workflow
### Invoking AWS Lambda functions locally using AWS SAM CLI? ###
### `Steps`
You will need to install AWS CLI, AWS SAM CLI and Docker to invoke a Lambda function locally. If you already have AWS CLI installed, you can skip to step 2.

### `Installing AWS SAM CLI`
Depending on your machine types, the steps to install are different. The following steps only cover  Windows.
### `Windows`

1. On Windows, you can install AWS SAM CLI using MSI files provided by AWS. Choose the correct MSI file based on your Windows version

64-bit: 

	https://github.com/awslabs/aws-sam-cli/releases/latest/download/AWS_SAM_CLI_64_PY3.msi
32-bit:

	https://github.com/awslabs/aws-sam-cli/releases/latest/download/AWS_SAM_CLI_32_PY3.msi

2. Run sam --version to verify that you have successfully installed AWS SAM CLI.
```
sam --version
```

### AWS SAM CLI ###
If you run sam, you can see SAM user guide like below:
```
		Usage: sam [OPTIONS] COMMAND [ARGS]...

  AWS Serverless Application Model (SAM) CLI

  The AWS Serverless Application Model extends AWS CloudFormation to provide
  a simplified way of defining the Amazon API Gateway APIs, AWS Lambda
  functions, and Amazon DynamoDB tables needed by your serverless
  application. You can find more in-depth guide about the SAM specification
  here: https://github.com/awslabs/serverless-application-model.

Options:
  --debug    Turn on debug logging to print debug message generated by SAM
             CLI.
  --version  Show the version and exit.
  --info
  --help     Show this message and exit.

Commands:
  package   Package an AWS SAM application. This is an alias for 'aws
            cloudformation package'.
  logs      Fetch logs for a function
  deploy    Deploy an AWS SAM application. This is an alias for 'aws
            cloudformation deploy'.
  build     Build your Lambda function code
  init      Initialize a serverless application with a...
  validate  Validate an AWS SAM template.
  publish   Publish a packaged AWS SAM template to the AWS Serverless
            Application Repository.
  local     Run your Serverless application locally for...
```
 ### Install Docker ###
3. Install Docker
Docker is needed by AWS SAM CLI to invoke Lambda functions locally. You can follow instructions on Docker website to install Docker.
```
Docker Desktop for Windows
```
This is the error message that you will see when you run sam local invoke without Docker.
```
sam local invoke -e event.json 
Error: Running AWS SAM projects locally requires Docker. Have you got it installed?
```
### Create Teamplate File ###
This article is focused on the local development and deployment of your application. I’m not going into detail on how to use Lambda in general. You’ll see the “app.py” file in the hello_world folder. This file contains your lambda handler of your sample application.

If we take a look at the template file you’ll see that SAM already prepared a template which is using the “lambda_handler” function in the app.py file as function handler. The template also contains an API Gateway endpoint with the ‘/hello’ path as event source. You can find detailed instructions about each of the components within the template here:https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy.html

Remember that this template is used during the deployment of your application and that SAM will create a CloudFormation stack which will contain all of the AWS resources you described in it.

```
Resources:
  AddServiceFunction: //function name
    Type: AWS::Serverless::Function 
    Properties:
      Handler: add_service_details.add_service_details // format is filename.functionName 
      Timeout: 10
      Runtime: nodejs16.x
```
### Local runner command

	sam local invoke -e ./`<`INPUT JSON PATH`>`  `<`FUNCTION NAME`>`

`Sample command`
```
	sam local invoke -e ./json/add_service_details.json AddServiceFunction 
```
`Output`
```
Invoking add_service_details.add_service_details (nodejs16.x)
Skip pulling image and use local one: public.ecr.aws/sam/emulation-nodejs16.x:rapid-1.55.0-x86_64.

Mounting D:\catalogue-service-lambda as /var/task:ro,delegated inside runtime container
START RequestId: bc1ef136-d595-4aad-b2d6-90944614b114 Version: $LATEST
END RequestId: bc1ef136-d595-4aad-b2d6-90944614b114
REPORT RequestId: bc1ef136-d595-4aad-b2d6-90944614b114  Init Duration: 0.28 ms  Duration: 1095.24 ms    Billed Duration: 1096 ms        Memory Size: 128 MB      Max Memory Used: 128 MB
{"id":990,"name":"mohit sharma","age":21,"city":"ind"}
```
### `Database credentials`

 	Host: host.docker.internal,
 	port: 5432,
	database: cloudassetdb,
 	username:  
 	password: 

### `Create a table in database`
1. Demo table create in database.

	```js
	CREATE TABLE demo(
		id SERIAL PRIMARY KEY,
		details jsonb NULL,
		view_json jsonb NULL
	);
	```
2. Catalogues table create in database.

 	```js
	CREATE TABLE demo_catalogues_detail(
		id SERIAL PRIMARY KEY,
		details jsonb NULL
	);
	```


### `Database tables used in program`
1. To save service details json
    ```
    Table Name = demo
    ```

    id ( pk ) | Details(jsonb) | View_Json(jsonb)
   --- | --- | --- 
    3726 | {} | {}


2. To save catalogues details json 
    ```
    Table Name = demo_catalogues_detail
    ```

    id ( pk ) | Details(jsonb) 
    --- | --- 
    500 | {}




### Who do I talk to? ###

	Please mail us on
	info@syenctiks.com
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About






