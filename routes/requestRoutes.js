const express = require('express');
const requestController = require('../controllers/requestController');

const router = express.Router();

router.get("/answeredForm/:idUser", requestController.isAnswered);
router.post('/markAsCompleted', requestController.markAsCompleted);

module.exports = router;