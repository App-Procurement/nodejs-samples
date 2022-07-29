const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.post("/", controller.addCatalogueDetail);
router.put("/", controller.updateCatalogueDetail);
router.post("/append_data", controller.appendDataCatalogueDetail);
router.get("/", controller.getAllCatalogueDetail);
router.get("/search_data", controller.searchCatalogueDetail);
router.delete("/:id", controller.deleteCatalogueDetail);
router.post("/append_key", controller.appendKeyCatalogueDetail);
router.post("/add_serial_number", controller.addSerialNumberCatalogueDetail);
module.exports = router;