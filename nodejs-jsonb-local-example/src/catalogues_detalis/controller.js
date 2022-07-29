const pool = require("../../db");
const query = require("./query");



// ADD catalogues
const addCatalogueDetail = (req, res) => {
    try {

        const jsonData = req.body
        pool.query(query.addCatalogueDetail, [500, JSON.stringify(jsonData)]);
        res.status(201).json(jsonData);
    }
    catch (err) {
        console.error(err.message);
        throw err;
    }
}

// Update  Catalogues
const updateCatalogueDetail = async (req, res) => {
    const jsonData = req.body;
    try {
        let allCatalogue = await pool.query(query.getAllCatalogueDetail);
        allCatalogue.rows[0].details.ops.cloudDashBoards.forEach(function (e, index, arr) {
            if (e.id == jsonData.id) {
                arr[index] = jsonData;
            }
        });
        pool.query(query.updateCatalogueDetail, [JSON.stringify(allCatalogue.rows[0].details), 500])
        res.status(200).json(allCatalogue.rows[0].details);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

//append data (catalogues-detail)
const appendDataCatalogueDetail = async (req, res) => {
    const jsonData = req.body
    try {
        let allCatalogue = await pool.query(query.getAllCatalogueDetail);
        jsonData.forEach(e => allCatalogue.rows[0].details.ops.cloudDashBoards.push(e));
        pool.query(query.updateCatalogueDetail, [allCatalogue.rows[0].details, 500])
        res.status(200).send(allCatalogue.rows[0].details);

    }
    catch (err) {
        console.error(err.message);
        throw err;
    }
}

//get all catalogues-detail
const getAllCatalogueDetail = async (res, req) => {
    try {
        const allCatalogue = await pool.query(query.getAllCatalogueDetail);
        req.status(200).json(allCatalogue.rows);


    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

const searchCatalogueDetail = async (req, res) => {
    const filters = req.query;
    let keysArr = Object.keys(filters);

    try {
        const allCatalogue = await pool.query(query.getAllCatalogueDetail);
        let allDataArr = []

        allCatalogue.rows.forEach(e => {
            allDataArr.push(e.details.ops)
        });
        console.log("i am hreeeeee", allDataArr)
        allDataArr.forEach(e => {
            let newData = [];
            keysArr.forEach(j => {

                e.cloudDashBoards.forEach(k => {

                    if (k[j] == filters[j]) {
                        newData.push(k);
                    }
                });
            });
            allDataArr = []
            allDataArr = newData

        });
        res.status(200).json(allDataArr);
    } catch (err) {
        console.error(err.message);
        throw err
    }
}
//delete catalogues-detail
const deleteCatalogueDetail = async (res, req) => {
    const cataloguesId = res.params.id;
    try {
        const allCatalogue = await pool.query(query.getAllCatalogueDetail);
        allCatalogue.rows[0].details.ops.cloudDashBoards.forEach((e, index) => {
            if (e.id == cataloguesId) {
                allCatalogue.rows[0].details.ops.cloudDashBoards.splice(index, 1);
            }
        });
        pool.query(query.updateCatalogueDetail, [JSON.stringify(allCatalogue.rows[0].details), 500])
        req.json(allCatalogue.rows[0].details);

    } catch (err) {
        console.error(err.message);
    }
}
//append key (catalogues-detail)
const appendKeyCatalogueDetail = async (req, res) => {
    const jsonData = req.body;
    let keysArr = Object.keys(jsonData);
    let valueArr = Object.values(jsonData);

    var allDataArr = [];
    try {

        const allCatalogue = await pool.query(query.getAllCatalogueDetail);
        allDataArr = allCatalogue.rows[0].details.ops.cloudDashBoards;

        allDataArr.map(u => {
            keysArr.forEach((e, index) => {
                u[e] = valueArr[index];
            });

        });
        pool.query(query.updateCatalogueDetail, [allCatalogue.rows[0].details, 500]);
        res.json(allCatalogue.rows[0].details);
    } catch (err) {
        console.error(err.message);
    }
}

// add serial number (catalogues-detail)
const addSerialNumberCatalogueDetail = async (req, res) => {
    try {
        var allDataArr = [];
        const allTodo = await pool.query(query.getAllCatalogueDetail);
        allDataArr = allTodo.rows[0].details.ops.cloudDashBoards;
        let ids = 1;
        allDataArr.map(u => {
            u.id = ids
            ids++;
        });
        pool.query(query.updateCatalogueDetail, [JSON.stringify(allTodo.rows[0].details), 500])
        res.json(allTodo.rows[0].details);
    } catch (err) {
        console.error(err.message);
    }
}
module.exports = {
    addCatalogueDetail,
    updateCatalogueDetail,
    appendDataCatalogueDetail,
    getAllCatalogueDetail,
    searchCatalogueDetail,
    deleteCatalogueDetail,
    appendKeyCatalogueDetail,
    addSerialNumberCatalogueDetail
}