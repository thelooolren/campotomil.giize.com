///////// FUNCIONES ////////////////

// Raíz de la página web
exports.web_raiz = function (req, res) 
{
    res.render('index',{"titulo": "CAMPOTOMIL - Únete a la aventura"});
  };

  // Vista que carga la librería de Phaser y la función principal del juego
  exports.web_game = function (req, res) 
  {
    res.render('game',{"titulo": "CAMPOTOMIL - Videojuego"});
  };