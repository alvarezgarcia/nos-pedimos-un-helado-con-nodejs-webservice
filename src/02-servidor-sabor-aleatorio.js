const http = require('http');

const sabores = require('./sabores');
const PUERTO = 9090;

function numeroAleatorio(min, max) {
  const numero = Math.floor((Math.random() * max) + min);
  return numero;
}

function responder(consulta, respuesta) {
  const aleatorio = numeroAleatorio(0, sabores.length);
  const sabor = sabores[aleatorio];

  respuesta.write(sabor);
  respuesta.end();
}

const servidor = http.createServer(responder);
servidor.listen(PUERTO);

console.log('Escuchando en el puerto', PUERTO);
