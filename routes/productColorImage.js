
const express = require('express');
const router = express.Router();

const image_Controller = require('../controllers/productColorImage')


router.route('/').post(image_Controller.createcolorimage).get(image_Controller.getcolorimage);
router.route('/:id').get(image_Controller.getonecolorimage).delete(image_Controller.deletecolorimage).put(image_Controller.updatecolorimage);


module.exports = router;
