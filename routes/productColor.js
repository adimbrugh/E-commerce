const express = require('express');
const router = express.Router();

const product_colorsController = require('../controllers/productColor');

router.route('/').post(product_colorsController.createproductcolor).get(product_colorsController.getproductcolor);
router.route('/:id').get(product_colorsController.getoneproductcolor).put(product_colorsController.updateproductcolor).delete(product_colorsController.deleteproductcolor);


module.exports = router;
