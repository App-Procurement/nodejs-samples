const addServiceDetail = "INSERT INTO service_detail (details) VALUES ($1)  RETURNING * ";
const updateServiceDetail = "UPDATE  service_detail SET  details= $1  WHERE id = $2";
const getAllServiceDetail = "SELECT * FROM service_detail";
const deleteServiceDetail = "DELETE FROM service_detail WHERE id = $1";
module.exports = {
    addServiceDetail,
    updateServiceDetail,
    getAllServiceDetail,
    deleteServiceDetail
}