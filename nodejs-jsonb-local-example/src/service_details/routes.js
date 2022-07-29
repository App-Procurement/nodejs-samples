const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.post("/", controller.addServiceDetail);
router.post("/all_data", controller.addAllServiceData);
router.put("/:id", controller.updateServiceDetail);
router.get("/", controller.searchServiceDetail);
router.delete("/:id", controller.deleteServiceDetail);
router.post("/key", controller.keyAddServiceDetail);
router.put("/", controller.addSerialNumberServiceDeatil);

module.exports = router;