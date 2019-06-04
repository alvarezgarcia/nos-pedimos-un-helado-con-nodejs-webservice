const http = require('http');

const {
  noEncontrado,
  devolverSaborAleatorio,
  manejarEndpoint
} = require('./lib');

const ENDPOINT = '/helados';
const PUERTO = 9090;

function responder(consulta, respuesta) {
  switch (consulta.url) {
    case ENDPOINT + '/aleatorio':
      devolverSaborAleatorio(consulta, respuesta);
      break;
    case ENDPOINT:
      manejarEndpoint(consulta, respuesta);
      break;
    default:
      noEncontrado(respuesta);
  }
}

const servidor = http.createServer(responder);
servidor.listen(PUERTO);

console.log('API ejecutándose en el puerto', PUERTO);
