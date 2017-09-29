
const PROXY_CONFIG = [
  {
    "context": [
      "/organizacion/listar",
      "/organizacion/registrar",
      "/organizacion/login",
      "/organizacion/nuevo"
    ],
    "target": "http://localhost:3000",
    "secure": false
  }
];

module.exports = PROXY_CONFIG;
