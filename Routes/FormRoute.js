const express = require('express');
const router = express.Router();
const {createForm, getFormById } = require('../Controllers/FormController');



router.post('/createform', createForm);

router.get('/forms/:id', getFormById);


module.exports = router;
