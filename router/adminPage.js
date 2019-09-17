const express = require("express");
const tokenMiddleware = require('../middleware/auth'); //middleware
const adminPageCtrl = require('../api/adminPage/adminPage.ctrl');

const router = express.Router();

router.get("/", tokenMiddleware, adminPageCtrl.awaitUser);
router.get("/allow", tokenMiddleware, adminPageCtrl.awaitUser);
router.delete("/reject", tokenMiddleware, adminPageCtrl.rejectUser);

module.exports = router;