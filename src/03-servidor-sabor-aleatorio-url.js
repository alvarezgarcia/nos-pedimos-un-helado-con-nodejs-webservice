const http = require('http');

const sabores = require('./sabores');
const { numeroAleatorio } = require('./lib');

const PUERTO = 9090;

const FUNCION_DAME_TODOS = '/dameTodos'
const FUNCION_DAME_ALEATORIO = '/dameAleatorio';

function responder(consulta, respuesta) {
  if (consulta.url === FUNCION_DAME_TODOS) {
    respuesta.write(sabores.join(', '));
  }

  if (consulta.url === FUNCION_DAME_ALEATORIO) {
    const aleatorio = numeroAleatorio(0, sabores.length);
    const sabor = sabores[aleatorio];

    respuesta.write(sabor);
    return respuesta.end();
  }

  respuesta.write('No encontrado');
  respuesta.statusCode = 404;
  return respuesta.end();
}

const servidor = http.createServer(responder);
servidor.listen(PUERTO);

console.log('API ejecutándose en el puerto', PUERTO);
