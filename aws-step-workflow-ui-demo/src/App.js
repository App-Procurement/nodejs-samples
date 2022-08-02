import React, { useState, useEffect } from 'react';
import './App.css';
let AWS = require('aws-sdk');


const App = () => {

    const originalMachineArn = "arn:aws:states:us-east-1:657907747545:stateMachine:send-to-pre-state";

    const [newMachineArn, setnewMachineArn] = useState('arn:aws:states:us-east-1:657907747545:stateMachine:send-to-pre-state');
    const [machineStates, setmachineStates] = useState([]);
    const [currentExecutionArn, setcurrentExecutionArn] = useState('');
    const [executedStateArr, setexecutedStateArr] = useState([]);
    const [stepInput, setStepInput] = useState('');
    const [useCaseName, setUseCaseName] = useState('')
    const [usecaseList, setUsecaseList] = useState([]);
    const [loading, setLoading] = useState(false)

    const [newStateToStart, setnewStateToStart] = useState('')
    const StepFunctions = require('aws-sdk/clients/stepfunctions');

    const credentials = {
        region: 'us-east-1',
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
    }

    const lambda = new AWS.Lambda(credentials);
    const stepfunctions = new StepFunctions(credentials);

    var describeSTparams = {
        stateMachineArn: originalMachineArn /* required */
    };

    const params = {
        stateMachineArn: newMachineArn,
        input: "[]"
    };

    function usecaseArnToDb(arn) {

        let inputForpg = {
            executionArn: arn,
            usecaseName: useCaseName
        };

        var pgParams = {
            FunctionName: 'stepFunction_with_psql', /* required */
            Payload: JSON.stringify(inputForpg)
        };

        lambda.invoke(pgParams, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log("from pg", data);           // successful response
        });
    }

    function usecaseInputToDb() {
        let inputForpg = {
            stepInput: stepInput,
            usecaseName: useCaseName
        };

        var pgParams1 = {

            FunctionName: 'stepFunction_with_psql_usecase_input', /* required */
            Payload: JSON.stringify(inputForpg)

        };

        lambda.invoke(pgParams1, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log("from pg", data);           // successful response
        });

    }

    function executeStateMachine() {
        stepfunctions.startExecution(params, (err, data) => {
            if (err) {
                console.log(err);
                const response = {
                    statusCode: 500,
                    body: JSON.stringify({
                        message: 'There was an error'
                    })
                };
                // callback(null, response);
            } else {
                setcurrentExecutionArn(data.executionArn);
                gettingMachineDef();
                usecaseArnToDb(data.executionArn);
                usecaseInputToDb();
                const response = {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: 'Step function worked'
                    })
                };
                // callback(null, response);

                gettingExecutionHistory(data.executionArn);
            }
        });
    }
    function executeStateMachine2(exeArn) {

        const params2 = {
            stateMachineArn: exeArn,
            input: "[]"
        };

        stepfunctions.startExecution(params2, (err, data) => {
            if (err) {
                console.log(err);
                const response = {
                    statusCode: 500,
                    body: JSON.stringify({
                        message: 'There was an error'
                    })
                };
                // callback(null, response);
            } else {
                setcurrentExecutionArn(data.executionArn);
                gettingMachineDef();
                usecaseArnToDb(data.executionArn);

                const response = {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: 'Step function worked'
                    })
                };
                // callback(null, response);

                gettingExecutionHistory(data.executionArn);
            }
        });
    }

    function completeState() {
        setLoading(true);
        var params = {
            TableName: "stepfunction-uc1-2",
            Key: {
                "execution_arn": {
                    S: currentExecutionArn
                }
            }
        };

        let inputForpg = {
            executionArn: currentExecutionArn
        };

        var pgParams = {
            FunctionName: 'stepFunction_getToken', /* required */
            Payload: JSON.stringify(inputForpg)
        };

        lambda.invoke(pgParams, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else {
                console.log("token", data)
                var paramsForSendSuccessTask = {
                    output: '1',
                    taskToken: data.Payload /* required */
                };

                stepfunctions.sendTaskSuccess(paramsForSendSuccessTask, function (err, data) {
                    if (err) console.log(err, err.stack); // an error occurred
                    else {
                        console.log(data);

                        setTimeout(() => {
                            gettingExecutionHistory(currentExecutionArn);
                        }, 1000);
                    };           // successful response
                });

            };           // successful response
        });


    }

    function getUsecaseList() {

        var pgParams = {
            FunctionName: 'stepFunction_with_psql_get_usecase', /* required */
        };

        lambda.invoke(pgParams, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else {
                setUsecaseList(JSON.parse(data.Payload))
                console.log("usecaselist", data.Payload)

            };           // successful response
        });

    }

    function getUsecaseInputData() {

        var pgParams = {
            FunctionName: 'stepFunction_with_psql_get_input', /* required */
        };

        lambda.invoke(pgParams, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else {
                console.log("Got usecase inputlist", data.Payload);

                JSON.parse(data.Payload).forEach(e => {
                    if (e.usecasename === useCaseName) {
                        setStepInput(e.stepinput);
                    }

                });

            };           // successful response
        });


    }

    function gettingMachineDef() {
        stepfunctions.describeStateMachine(describeSTparams, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else {
                setmachineStates(JSON.parse(data.definition).States)
            }
        });
    }


    function gettingExecutionHistory(executionArn) {
        var paramsforhistory = {
            executionArn: executionArn,
            maxResults: '1000',
        };
        stepfunctions.getExecutionHistory(paramsforhistory, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else {
                let executedStateArray = []
                data.events.forEach(e => {
                    if (e.type === "TaskStateEntered" || e.type === "PassStateEntered") {
                        executedStateArray.push(e.stateEnteredEventDetails.name);
                    }
                });
                setexecutedStateArr(executedStateArray);
                console.log("executedStateArr", data);
                setLoading(false);
            }           // successful response
        });
    }

    const [selectedState, setselectedState] = useState('')


    function withKeepingStates() {
        var params = {
            stateMachineArn: originalMachineArn /* required */
        };
        stepfunctions.describeStateMachine(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else {
                const index = Object.keys(JSON.parse(data.definition).States).indexOf(selectedState);

                let newDefinition = JSON.parse(data.definition)

                console.log(newDefinition);
                let states = JSON.parse(data.definition).States

                for (let i = 0; i < index; i++) {
                    let stateToPass = Object.keys(JSON.parse(data.definition).States)[i];
                    delete states[stateToPass].Resource
                    delete states[stateToPass].Parameters
                    states[stateToPass].Type = "Pass"
                }

                console.log(states);
                newDefinition.States = states
                creatingNewMachine(JSON.stringify(newDefinition));
            }
        });
    }

    function creatingNewMachine(definition) {
        var params = {
            definition: definition, /* required */
            name: "startingFrom-" + newStateToStart + JSON.stringify(Math.random()), /* required */
            roleArn: 'arn:aws:iam::657907747545:role/backendstepfunc-Role', /* required */
            type: "STANDARD"
        };

        stepfunctions.createStateMachine(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else {
                console.log("tttttt", data);
                setnewMachineArn(data.stateMachineArn);
                console.log(newMachineArn)
                executeStateMachine2(data.stateMachineArn);
            }           // successful response
        });
    }

    function pageUpdateFunc() {
        console.log(currentExecutionArn);
        gettingExecutionHistory(currentExecutionArn);

        usecaseList.forEach(e => {
            console.log(e);
            if (e.usecasename === useCaseName) {
                setcurrentExecutionArn(e.executionarn)
                console.log(e.executionarn);
            }
        });
    }

    useEffect(() => {
        pageUpdateFunc();
        getUsecaseInputData();
    }, [useCaseName])


    useEffect(() => {
        getUsecaseList();
    }, [executedStateArr])

    useEffect(() => {
        gettingMachineDef();
    }, [currentExecutionArn, machineStates, executedStateArr])

    useEffect(() => {

    }, [executedStateArr])


    return (
        <>

            {/* <h3 className='m-3'> {useCaseName} </h3> */}
            <div className='d-flex'>

                <div className='d-flex flex-column myBox' style={{ width: "300px" }}>
                    <input type="text" className='form-control' value={useCaseName} onChange={e => setUseCaseName(e.target.value)} placeholder="Enter Usecase Name Here" />
                    <button className='btn btn-success m-2' onClick={executeStateMachine}>Execute Machine</button>
                    <button className='btn btn-primary m-2 mt-3' onClick={completeState}>Next Stage </button>
                    <textarea className='form-control' value={stepInput} onChange={e => setStepInput(e.target.value)} style={{ height: "200px", fontSize: "10px" }} placeholder="Input Here" />
                    <button className='btn btn-info m-2 mt-3' onClick={usecaseInputToDb}>Send Input</button>

                </div>

                <div className='myBox' style={{ width: "550px" }}>
                    <h5>This is machine</h5>
                    <div>
                        <ul>
                            {Object.keys(machineStates).map(item => {
                                return <li key={item}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>

                <div className='w-50 myBox'>
                    <h5>This is current executed states</h5>
                    <div>
                        <ul>
                            {executedStateArr.map(item => {
                                return <li key={item}>{item}</li>
                            })}
                            {loading && <h6 className='mt-1' style={{ color: "green" }}>Loading...</h6>}
                        </ul>
                    </div>
                </div>
            </div>

            <div className=' text-break myBox' >
                <h6>Usecase list</h6>
                <select className='form-select' onChange={e => setUseCaseName(e.target.value)} >
                    <option disabled selected>Select here</option>
                    {usecaseList.map(item => {
                        return <option key={item.executionarn} value={item.usecaseaame}>{item.usecasename}</option>;
                    })}
                </select>

                <div>
                    <button className='btn btn-primary mt-3' onClick={pageUpdateFunc}>Select</button>
                </div>
            </div>

            <div className=' text-break myBox' >
                <h5>Select state to start with</h5>
                <select className='form-select' onChange={e => setselectedState(e.target.value)} >
                    <option disabled selected>Select here</option>
                    {executedStateArr.map(item => {
                        return <option key={item} value={item}>{item}</option>;
                    })}
                </select>

                <button className='btn btn-primary m-2 mt-3' onClick={withKeepingStates}>Go To State </button>
            </div>

        </>
    );
}

export default App;