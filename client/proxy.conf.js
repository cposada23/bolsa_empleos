
const PROXY_CONFIG = [
  {
    "context": [
      "/organizacion/listar",
      "/organizacion/registrar",
      "/organizacion/login",
      "/organizacion/nuevaOferta",
      "/organizacion/listarOfertas"
    ],
    "target": "http://localhost:3000",
    "secure": false

    // todo: set a general route
  }
];

module.exports = PROXY_CONFIG;
