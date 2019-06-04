const sabores = require('./../sabores');

const ENDPOINT = '/helados';

function noEncontrado(respuesta) {
  respuesta.status = 404;
  respuesta.write('No encontrado');

  return respuesta.end();
}

function numeroAleatorio(min, max) {
  const numero = Math.floor((Math.random() * max) + min);
  return numero;
}

function agregarSabor(nuevoSabor, listaSabores) {
  listaSabores.push(nuevoSabor);
}

function manejarEndpointGet(consulta, respuesta) {
  respuesta.write(sabores.join(', '));
  return respuesta.end();
}

function manejarEndpointPost(consulta, respuesta) {
  let body = '';
  consulta.on('data', function(cacho) {
    body += cacho.toString();
  });

  consulta.on('end', function() {
    const nuevoSabor = body;
    agregarSabor(nuevoSabor, sabores);

    respuesta.write('Gracias por agregar el nuevo sabor ' + nuevoSabor);

    console.log('Los sabores ahora son', sabores);
    return respuesta.end();
  });
}

function manejarEndpoint(consulta, respuesta) {
  if (consulta.method === 'POST') {
    return manejarEndpointPost(consulta, respuesta);
  } else if (consulta.method === 'GET') {
    return manejarEndpointGet(consulta, respuesta);
  } else {
    return noEncontrado(respuesta);
  }
}

function devolverSaborAleatorio(consulta, respuesta) {
  if (consulta.method === 'POST') {
    return noEncontrado(respuesta);
  }

  const numero = numeroAleatorio(0, sabores.length);
  const sabor = sabores[numero];

  respuesta.write(sabor);
  return respuesta.end();
}

module.exports = {
  noEncontrado,
  devolverSaborAleatorio,
  manejarEndpoint,
  numeroAleatorio
}
