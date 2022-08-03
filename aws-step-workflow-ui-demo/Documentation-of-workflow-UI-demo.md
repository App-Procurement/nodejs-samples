# Follwing is documentation of step-functions in aws 

## Feature provided by this workflow UI
1. We can see all steps present in state machine.
2. Execute machine with specific usecase name.
3. We can see last executed step.
4. Each usecase have a json of inputs corresponding to each step.
5. We can select any previous usecase and can see or proceed it.
6. Anytime we can change input json.
7. We can go to any previous state in executed machine.

## Important components in step-functions

1. Definition of step-function
2. Lambda-callbacks

### Definition of step-function
It is a json to define a step-function ( Contains details of all steps ).

#### This machine containes following steps

Step Name | Lambda-functions
-----------|---------------------
Requirement_Create_usecase_document  | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction1</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Requirement_Create_screen_design | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction2</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
*Requirement_Updating_usecase_in_netlifi | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction3</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Mock_development_Create_API_spec | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction4</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Mock_development_Create_postman_test | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction5</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Mock_development_Create_ui_screen_with_mock_API | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction6</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Mock_development_Create_test_API | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction7</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Actual_development_Data_design_github_page | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction8</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Actual_development_API_source_code_in_github | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction9</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Actual_development_Populate_test_data_in_github | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction10</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Actual_development_Junit5_test_in_github | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction11</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Actual_development_Cucumber_BDD_tests_in_github | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction12</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Actual_development_Gatling_performance | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction13</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Actual_development_Code_review_with_tech_lead | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction14</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Actual_development_Actual_ui_api_integration | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction15</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Actual_development_Branch_merge_after_review | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction16</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
CICD_Tests_Create_ci_cd_pipeline | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction17</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
CICD_Tests_Create_kubernetes_operator | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction18</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
CICD_Tests_Link_API_with_github_and_netlifi | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction19</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
CICD_Tests_Upload_test_results_in_s3_website | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction20</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
CICD_Tests_Upload_test_env_url_in_netlifi_site | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction21</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
CICD_Tests_Stage_after_review | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction22</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Stage_Release_Stage_test_and_review | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction23</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Stage_Release_Promot_to_prod | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction24</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Stage_Release_API_security_test_in_prod | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction25</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Stage_Release_Create_or_update_release_note | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction26</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Publish_And_Operate_Security_and_operation_readiness | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction27</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>
Publish_And_Operate_Release_note | <table> <tr><th>Name</th> <th>Work</th> <th>Input Json</th> </tr><tr><td>stepFunction28</td> <td>It gets token from state machine and save it to database. It is defined inside stepfunction definition.</td><td>```{ "executionArn" : "..." , "token" : "..." }```</td> </tr><tr><td>stepFunction_with_psql_usecase_input</td> <td>It saves the metadata of usecase inside database and github. ``` "stepInput" ``` is a single json of metadata for an usecase</td><td>```{ "usecaseName" : "..." , "stepInput" : "..."  } ```</td> </tr></table>

### Lambda-callbacks
Each step in step-function is associated with an lambda function and Lambda-callback means each step provies a <em><b> 'task token' </b> </em> to be success and step wait for the task to complete.

## Detail of react program created on step function

#### Command to download aws-sdk dependency

```
npm install aws-sdk
yarn add aws-sdk
``` 

#### To create instance of step-function
```js
const credentials = {
        region: 'us-east-1',
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY 
}

const stepfunctions = new StepFunctions(credentials);
```

#### Methods of aws-sdk used in workflow UI

1. For getting details of machine

    ``` js
    var params = {
        stateMachineArn: 'STRING_VALUE' /* required */
    };
    stepfunctions.describeStateMachine(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
    ```

2. To start machine execution
    ```js
    var params = {
        stateMachineArn: 'STRING_VALUE', /* required */
        input: 'STRING_VALUE',
        name: 'STRING_VALUE',
        traceHeader: 'STRING_VALUE'
    };

    stepfunctions.startExecution(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
    ```

3. To complete task success.
    ```js
    var params = {
        output: 'STRING_VALUE', /* required */
        taskToken: 'STRING_VALUE' /* required */
    };
    stepfunctions.sendTaskSuccess(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
    ```
4. For getting history of execution ( To get how many steps are completed ).
    ```js
    var params = {
        executionArn: 'STRING_VALUE', /* required */
        includeExecutionData: true || false,
        maxResults: 'NUMBER_VALUE',
        nextToken: 'STRING_VALUE',
        reverseOrder: true || false
    };
    stepfunctions.getExecutionHistory(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
    ```
5. To create a new machine ( For send machine to precious states )
    ```js
    var params = {
        definition: 'STRING_VALUE', /* required */
        name: 'STRING_VALUE', /* required */
        roleArn: 'STRING_VALUE', /* required */
        type: STANDARD | EXPRESS
    };
    stepfunctions.createStateMachine(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
    ```
### Database tables used in program
1. To save task token corresponding to execution ARN
    ```
    Table Name = stepfunction-uc1-2
    ```

    execution_arn ( pk ) | task_token 
    --- | --- 
    arn:aws:states:us-east-1... | AQB4AAAAKgA...


2. To save execution arn corresponding to 
    ```
    Table Name = usecase_arn
    ```

    usecaseName ( pk ) | executionArn 
    --- | --- 
    usecase1 | arn:aws:states:us-east-1...


3. To save input corresponding to usecase 
    ```
    Table Name = usecase_input
    ```

    usecaseName ( pk ) | stepInput 
    --- | --- 
    usecase1 | { }


### Events in UI

1. When click on <button>Execute Machine</button> button.
    ```
    1. We have to give an usecase name and input json before starting machine.

    2. It takes the machine arn and starts execution of machine with saving data in required tables.
    ```

2.  When click on <button>Next Stage</button> button.
    ```
    1. It takes the current execution arn corresponding to usecase and fetch task-token from database.

    2. Sends task success with that task-token and when a task token is sent success machine move forword with one step. 
    ```
3. When we select usecase name from given list and click on <button>select</button>
    ```
    1. It fetch execution arn from database corresponding to that usecase and set it as current executionArn in UI.

    2. Show steps completed in that usecase.  
    ```
4. When we select previous step and click on <button>Go To State</button>

    ```
    1. It creates a new definition with that step and creates a new machine and execute it. 

    2. It updates new execution arn in usecase_arn table.
    ```

## Some important points
1. Machine definition is as follows 

    ```json
    {
        "Comment": "A description of my state machine",
        "StartAt": "Requirement_Create_usecase_document",
        "States": {
            "Requirement_Create_usecase_document": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction1",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Requirement_Create_screen_design"
            },
            "Requirement_Create_screen_design": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction2",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Requirement_Updating_usecase_in_netlifi"
            },
            "Requirement_Updating_usecase_in_netlifi": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction3",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Mock_development_Create_API_spec"
            },
            "Mock_development_Create_API_spec": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction4",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Mock_development_Create_postman_test"
            },
            "Mock_development_Create_postman_test": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction5",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Mock_development_Create_ui_screen_with_mock_API"
            },
            "Mock_development_Create_ui_screen_with_mock_API": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction6",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Mock_development_Create_test_API"
            },
            "Mock_development_Create_test_API": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction7",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Actual_development_Data_design_github_page"
            },
            "Actual_development_Data_design_github_page": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction8",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Actual_development_API_source_code_in_github"
            },
            "Actual_development_API_source_code_in_github": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction9",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Actual_development_Populate_test_data_in_github"
            },
            "Actual_development_Populate_test_data_in_github": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction10",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Actual_development_Junit5_test_in_github"
            },
            "Actual_development_Junit5_test_in_github": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction11",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Actual_development_Cucumber_BDD_tests_in_github"
            },
            "Actual_development_Cucumber_BDD_tests_in_github": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction12",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Actual_development_Gatling_performance"
            },
            "Actual_development_Gatling_performance": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction13",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Actual_development_Code_review_with_tech_lead"
            },
            "Actual_development_Code_review_with_tech_lead": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction14",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Actual_development_Actual_ui_api_integration"
            },
            "Actual_development_Actual_ui_api_integration": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction15",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Actual_development_Branch_merge_after_review"
            },
            "Actual_development_Branch_merge_after_review": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction16",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "CICD_Tests_Create_ci_cd_pipeline"
            },
            "CICD_Tests_Create_ci_cd_pipeline": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction17",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "CICD_Tests_Create_kubernetes_operator"
            },
            "CICD_Tests_Create_kubernetes_operator": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction18",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "CICD_Tests_Link_API_with_github_and_netlifi"
            },
            "CICD_Tests_Link_API_with_github_and_netlifi": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction19",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "CICD_Tests_Upload_test_results_in_s3_website"
            },
            "CICD_Tests_Upload_test_results_in_s3_website": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction20",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "CICD_Tests_Upload_test_env_url_in_netlifi_site"
            },
            "CICD_Tests_Upload_test_env_url_in_netlifi_site": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction21",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "CICD_Tests_Stage_after_review"
            },
            "CICD_Tests_Stage_after_review": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction22",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Stage_Release_Stage_test_and_review"
            },
            "Stage_Release_Stage_test_and_review": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction23",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Stage_Release_Promot_to_prod"
            },
            "Stage_Release_Promot_to_prod": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction24",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Stage_Release_API_security_test_in_prod"
            },
            "Stage_Release_API_security_test_in_prod": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction25",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Stage_Release_Create_or_update_release_note"
            },
            "Stage_Release_Create_or_update_release_note": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction26",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Publish_And_Operate_Security_and_operation_readiness"
            },
            "Publish_And_Operate_Security_and_operation_readiness": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction27",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "Next": "Publish_And_Operate_Release_note"
            },
            "Publish_And_Operate_Release_note": {
            "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "Parameters": {
                "FunctionName": "stepFunction28",
                "Payload": {
                "executionArn.$": "$$.Execution.Id",
                "token.$": "$$.Task.Token"
                }
            },
            "End": true
            }
        }
    }
    ```

2. Machine Arn is static in code

3. How new machine definition is bieng created when we select previous state
    ```
    1. It takes the selected step name and match it in the definition then makes all previous states as pass state and execute it. 
    ```

4. Access key and secret keys are set into a .env.local file. This file is git ignored.

    ```js
    REACT_APP_ACCESS_KEY_ID = ""
    REACT_APP_SECRET_ACCESS_KEY = ""
    ```
   <em> ** Never commit and push 'Access_key' and 'Secret_access_key' directly into github ** </em>