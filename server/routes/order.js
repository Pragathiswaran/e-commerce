const express = require('express');
const { getOrders } = require('../controllers/orderControllers');
const router = express.Router();
router.route('/order').post(getOrders)

module.exports = router