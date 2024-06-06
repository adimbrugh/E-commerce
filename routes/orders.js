

const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orders');

router.route('/').post(orderController.createorder).get(orderController.getOrders);
router.route('/:id').get(orderController.getoneOrder).put(orderController.updateOrders).delete(orderController.deleteOrders);


module.exports = router;

