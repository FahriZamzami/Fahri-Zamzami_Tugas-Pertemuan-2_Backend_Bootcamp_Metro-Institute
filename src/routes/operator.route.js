const express = require('express');
const router = express.Router();
const operatorController = require('../controllers/operator.controller');

router.get('/', operatorController.list_operator);
router.post('/', operatorController.add_operator);
router.put('/:id', operatorController.update_operator);
router.delete('/:id', operatorController.delete_operator);
router.get('/:id', operatorController.detail_operator);

module.exports = router;