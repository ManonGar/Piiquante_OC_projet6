// Importation d'express et création d'un routeur express
const express = require('express');
const router = express.Router();

// On importe les middlewares
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// On importe le contrôleur
const sauceCtrl = require('../controllers/sauce');

// On enregistre les routes sauce
router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;