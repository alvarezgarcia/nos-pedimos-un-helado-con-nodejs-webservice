# Tomemos un helado con NodeJS - Código fuente

Este repositorio contiene el código fuente de la presentación
[Tomemos un helado con NodeJS](https://tomemos-un-helado-con-nodejs.now.sh/)

## Descarga
```
git clone https://github.com/raichuk/nos-pedimos-un-helado-con-nodejs-webservice.git
```

## Estructura de archivos

- **src/**
  - 01-servidor-saluda.js
  - 02-servidor-sabor-aleatorio.js
  - 03-servidor-sabor-aleatorio-url.js
  - 04-servidor-completo.js
  - sabores.js
  - **lib/**
    - index.js


`node src/01-servidor-saluda.js`
- Devuelve un saludo

`node src/02-servidor-sabor-aleatorio.js`
- Devuelve un sabores aleatorio
- La lista de sabores se inclye desde `src/sabores.js`

`node src/03-servidor-sabor-aleatorio-url.js`
- Devuelve un sabor aleatorio al acceder con la url: `http://localhost:9090/dameAleatorio`
- Devuelve todos los sabores al acceder con la url: `http://localhost:9090/dameTodos`
- La función `numeroAleatorio` se incluyde desde `src/lib/index.js`

`node src/04-servidor-completo.js`
- Implementación básica de arquitectura REST
- Recomendable usar **Postman** para agregar sabores
- Devuelve un sabor aleatorio al acceder con la url: `http://localhost:9090/helados/aleatorio` usando `GET`
- Devuelve todos los sabores al acceder con la url: `http://localhost:9090/helados` usando `GET`.
- Permite agregar un sabor usando `POST` en la url: `http://localhost:9090/helados`
