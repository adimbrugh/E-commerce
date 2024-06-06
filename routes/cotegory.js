const express = require('express');
const router = express.Router()


const categoryController = require('../controllers/category');

router.route('/').post(categoryController.createCategory).get(categoryController.getCategory);
router.route('/:id').get(categoryController.getoneCategory).put(categoryController.updateCategory).delete(categoryController.deleteCategory)

module.exports = router;