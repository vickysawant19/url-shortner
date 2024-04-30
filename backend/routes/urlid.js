const express = require("express");
const { getUrl } = require("../controllers/urllid");

const router = express.Router();

router.get("/:id", getUrl);

module.exports = router;
