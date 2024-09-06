const express = require('express');
const excerciseController = require('../controllers/excerciseController');

const router = express.Router();

router.get('/getExcercises', excerciseController.getExcercises);
router.get('/getQuestions', excerciseController.getQuestions);
router.post('/insertAnswer', excerciseController.insertAnswer);


module.exports = router;
