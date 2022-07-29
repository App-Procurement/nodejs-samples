const pool = require("../../db");
const query = require("./query");



// ADD service detail
const addServiceDetail = (req, res) => {
    try {
        const jsonData = req.body
        pool.query(query.addServiceDetail, [jsonData]);
        res.status(201).json(jsonData)
    }
    catch (err) {
        console.error(err.message);
        throw err;
    }
}

//add all service data(ADD MULTI JSON)
const addAllServiceData = (req, res) => {
    try {
        const jsonData = req.body
        jsonData.forEach(e => {
            pool.query(query.addServiceDetail, [e]);
        });
        res.status(201).json(jsonData);
    }
    catch (err) {
        console.error(err.message);
        throw err;
    }
}

//update service detail
const updateServiceDetail = (res, req) => {
    const serviceId = res.params;
    const jsonData = res.body;
    try {
        pool.query(query.updateServiceDetail, [jsonData, serviceId.id])
        req.status(200).json(jsonData);

    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

// search service detail
const searchServiceDetail = async (req, res) => {
    const filters = req.query;
    let keysArr = Object.keys(filters);

    try {
        const allService = await pool.query(query.getAllServiceDetail);
// console.log("allService",allService)
        let allDataArr = []

        allService.rows.forEach(e => {
            allDataArr.push(e.details)
        });
        keysArr.forEach(j => {

            let newData = [];

            allDataArr.forEach(e => {
                if (e[j] == filters[j]) {
                    newData.push(e);
                }
            });

            allDataArr = []
            allDataArr = newData

        });
        res.json(allDataArr);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

// delete service detail
const deleteServiceDetail = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query(query.deleteServiceDetail, [id])
        res.status(200).json("service_detail delete susessfully");

    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

// add key in json (service detail)
const keyAddServiceDetail = async (req, res) => {
    const jsonData = req.body;
    let keysArr = Object.keys(jsonData);
    let valueArr = Object.values(jsonData);
    var allDataArr = [];
    try {
        const allService = await pool.query(query.getAllServiceDetail);
        allDataArr = allService.rows

        allDataArr.map(u => {
            keysArr.forEach((e, index) => {
                u.details[e] = valueArr[index]
            });
        });
        for (let i = 0; i < allDataArr.length; i++) {
            pool.query(query.updateServiceDetail, [allDataArr[i].details, allService.rows[i].id])

        }
        res.status(200).json(allDataArr);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}
// add serial number
const addSerialNumberServiceDeatil = async (req, res) => {
    try {
        var allDataArr = [];
        const allService = await pool.query(query.getAllServiceDetail);
        allDataArr = allService.rows
        let ids = 1;
        allDataArr.map(u => {
            u.details.id = ids
            ids++;
        });
        for (let i = 0; i < allDataArr.length; i++) {
            pool.query(query.updateServiceDetail, [allDataArr[i].details, allService.rows[i].id])
        }
        res.json(allDataArr);
    } catch (err) {
        console.error(err.message);
    }
}
module.exports = {
    addServiceDetail,
    addAllServiceData,
    updateServiceDetail,
    searchServiceDetail,
    deleteServiceDetail,
    keyAddServiceDetail,
    addSerialNumberServiceDeatil
}