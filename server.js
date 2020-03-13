////// CARGA DE MÓDULOS NECESARIOS //////

const dotenv = require ('dotenv');
const http = require ('http');
const express = require ('express');
const engine = require('ejs-blocks');
const path = require ('path');

// Lectura del fichero de entorno .env
dotenv.config();

// Creamos una instancia del módulo express
const app = express();

// Configuramos la app para que use el motor de plantillas EJS.
// Usamos el motor ejs-blocks que nos permitirá usar bloques con EJS.
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

/**
 * Rutas para la carpeta ./game que contiene todos los ficheros del juego
 * /lib -> contiene la librería de Phaser
 * /src -> contiene la lógica del juego
 */
app.use('/game', express.static(__dirname + '/lib/'));
app.use('/game', express.static(__dirname + '/src/'));

// Puerto de escucha
let puerto = 8080;

// Arrancamos el servidor
app.listen(puerto, ()=>{
    console.log("Servidor web funcionando en puerto: " + puerto);
});

////////////////////////////////////////////
//////////////// RUTAS /////////////////////
////////////////////////////////////////////

// Rutas para la web en routes/web.routes.js
const web = require('./routes/web.routes');
app.use('/', web);