const express = require("express");
const app = express();
const serviceDetails = require("./src/service_details/routes")
const cataloguesDetalis = require("./src/catalogues_detalis/routes")
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));



/************** service details *************/

app.use('/service_detail', serviceDetails);

/***************** catalogues details *************/

app.use('/catalogues_detail', cataloguesDetalis);


// RUNING PORT
app.listen(port, () => {
    console.log(`connection sucessfully ${port}`);
})