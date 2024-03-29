const auth = require("../middleware/auth");
const router = require("express").Router();
const candidateCtrl = require("../controller/candidateCtrl");

router.post("/", auth, candidateCtrl.createApplication);
router.post("/edit", auth, candidateCtrl.submitApplication);
router.get("/myapplication", auth, candidateCtrl.getApplication);
router.get("/getfield/:id", candidateCtrl.getField);

module.exports = router;
