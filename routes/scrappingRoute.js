const express = require("express");
const getScrappedData = require("../controllers/scrapped-blog");
const router = express.Router();

router.get("/", getScrappedData);
module.exports = router;
