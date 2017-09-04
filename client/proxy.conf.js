
const PROXY_CONFIG = [
  {
    "context": [
      "/organizacion/listar",
      "/organizacion/registrar",
      "/organizacion/login"
    ],
    "target": "http://localhost:3000",
    "secure": false
  }
];

module.exports = PROXY_CONFIG;
