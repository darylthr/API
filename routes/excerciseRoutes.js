const express = require('express');
const excerciseController = require('../controllers/excerciseController');

const router = express.Router();

router.get('/respiratory', excerciseController.respiratory);
router.get('/muscular', excerciseController.muscular);
router.get('/musical', excerciseController.musical);
router.get('/getQuestions', excerciseController.getQuestions);
router.post('/insertAnswer', excerciseController.insertAnswer);


module.exports = router;
