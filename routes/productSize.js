



const express = require('express');
const router = express.Router();

const sizeController = require('../controllers/productsize');

router.route('/').post(sizeController.createproductsize).get(sizeController.getprodeutsize);
router.route('/:id').get(sizeController.getoneproductsize).put(sizeController.updateproductsize).delete(sizeController.deleteproductsize);


module.exports = router;

