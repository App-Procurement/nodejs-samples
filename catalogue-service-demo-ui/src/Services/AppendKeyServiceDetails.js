import React, { useState, useEffect } from 'react';
import 'alertifyjs/build/css/alertify.css';
import '../css/Services.css';
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
let AWS = require('aws-sdk');

const data = {
    "key1": "value1"
}

const AppendKeyServiceDetails = () => {

    const credentials = {
        region: 'us-east-1',
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
    }
    const lambda = new AWS.Lambda(credentials);
    const [append, setAppend] = useState('');
    const [viewAppend, setViewAppend] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [isCopied1, setIsCopied1] = useState(false);
    function appendJson() {
        var appendService = {
            FunctionName: 'aws-node-http-api-project-dev-append_key_service_details',
            Payload: append
        };
        lambda.invoke(appendService, function (err, data) {
            if (err) console.log(err, err.stack);
            else {
                console.log("from append input", JSON.parse(data.Payload).rows);
                setViewAppend(JSON.parse(data.Payload).rows);
            };
        });
    }
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const onCopyText1 = () => {
        setIsCopied1(true);
        setTimeout(() => {
            setIsCopied1(false);
        }, 1000);
    };
    function PrettyPrint() {
        const a = JSON.parse(append);
        setAppend(JSON.stringify(a, null, 2))
    }
    return (
        <>
            <center>
                <hr size="3" noshade />
                <h2>
                    Service-Details
                </h2>
                <hr size="3" noshade />
            </center>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel">Demo</h5>
                            <div style={{ paddingLeft: "6px" }}>
                                <CopyToClipboard text={JSON.stringify(data)} onCopy={onCopyText}>
                                    <span>{isCopied ? "Copied!" : <a href=''> <MdContentCopy /></a>}</span>
                                </CopyToClipboard>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="scrollbar" id="style-default">
                            <div class="force-overflow">
                                <div class="modal-body">
                                    <pre>{JSON.stringify(data, null, 2)}</pre>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-danger" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">CLose</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='myclass'>
                <a type="button" href='http://localhost:3000/ServiceDetalis' class="btn btn-light">Go Back</a>
                <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Service Details Demo</a>
            </div>

            <div className='d-flex justify-content-around'>
                <div className='d-flex flex-column myBox' style={{ width: "600px" }}>
                    <h6>Append Key Service_Details</h6>
                    <textarea className='form-control' value={append} onChange={e => setAppend(e.target.value)} style={{ height: "300px", fontSize: "10px" }} placeholder="Input Here" />
                    <div className='d-flex'>
                        <button className='btn btn-info m-2 mt-3' style={{ width: "50%" }} onClick={appendJson}>Append Key Input</button>
                        <button className='btn btn-warning m-2 mt-3' style={{ width: "50%" }} onClick={PrettyPrint}>Formate Input</button>
                    </div>
                </div>
                <div className='d-flex flex-column myBox' style={{ width: "800px" }}>
                    <h4>Output:</h4>
                    <div style={{ marginLeft: "95%", marginTop: "-40px" }}>
                        <CopyToClipboard text={JSON.stringify(viewAppend)} onCopy={onCopyText1}>
                            <span>{isCopied1 ? "Copied!" : <a href='#'> <MdContentCopy /></a>}</span>
                        </CopyToClipboard>
                    </div>
                    <hr />
                    <div class="scrollbar" id="style-default">
                        <div class="force-overflow">
                            <div class="modal-body">
                                <pre>{JSON.stringify(viewAppend, null, 2)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default AppendKeyServiceDetails;