const express = require("express");
const { storeUrl, getallurls } = require("../controllers/short");

const router = express.Router();

router.route("").get(getallurls).post(storeUrl);

module.exports = router;
