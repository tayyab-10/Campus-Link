const express = require('express');
const router = express.Router();
const { createForm, getForms, getFormBySocietyType } = require('../Controllers/FormController');



router.post('/createform', createForm);

router.get('/getform', getForms);

router.get('/:societyType', getFormBySocietyType);

module.exports = router;
