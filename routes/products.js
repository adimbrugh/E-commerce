const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

router.route('/').post(productsController.createproducts).get(productsController.getproducts);
router.route('/:id').get(productsController.getoneproducts).put(productsController.updateProducts).delete(productsController.deleteProducts)

module.exports = router;