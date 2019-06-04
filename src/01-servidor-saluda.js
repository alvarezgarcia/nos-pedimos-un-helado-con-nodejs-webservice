const http = require('http');

function responder(consulta, respuesta) {
  respuesta.write('hola');
  respuesta.end();
}

const servidor = http.createServer(responder);
servidor.listen(9393);

console.log('Escuchando en el puerto 9393');
