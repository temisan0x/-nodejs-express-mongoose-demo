const express = require('express');
const router = express.Router();
const {getHome} = require("../controllers/bookController");

router.get('/', getHome);

module.exports = router;
