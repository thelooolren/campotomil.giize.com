///////// CARGA DE MÓDULOS NECESARIOS /////////
const express = require('express');
const router = express.Router();
const web_controller = require('../controllers/web.controller');

// Ruta raíz de la página
router.get('/', web_controller.web_raiz);

// Ruta que carga el videojuego
router.get('/game', web_controller.web_game);

module.exports = router