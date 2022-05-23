const express = require('express');
const router = express.Router();

const emailValidator = require('../middleware/email-validator');
const pswdValidator = require('../middleware/password-validator');

// On importe le contrôleur
const userCtrl = require('../controllers/user');

// On enregistre les routes user
router.post('/signup', emailValidator, pswdValidator, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;