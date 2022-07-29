const addCatalogueDetail = "INSERT INTO catalogue (id,details) VALUES ($1,$2)";
const updateCatalogueDetail = "UPDATE catalogue SET details= $1 WHERE id = $2";
const getAllCatalogueDetail = "SELECT * FROM catalogue";
const deleteServiceDetail = "DELETE FROM service_detail WHERE id = $1";
module.exports = {
    addCatalogueDetail,
    getAllCatalogueDetail,
    updateCatalogueDetail,
    deleteServiceDetail
}