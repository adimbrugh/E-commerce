



const express = require('express');
const router = express.Router();

const userphoneController = require('../controllers/userPhones');

router.route('/').post(userphoneController.createuserphone).get(userphoneController.getuserphone);
router.route('/:id').get(userphoneController.getoneuserphone).put(userphoneController.updateuserphone).delete(userphoneController.deleteuserphone);


module.exports = router;
