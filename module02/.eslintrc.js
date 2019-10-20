module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off", // desabilita a obrigatoriedade de colocar this.metodo inves de metodo
    "no-param-reassign": "off", // para a manipulacao do sequelize
    "camelcase": "off", // provavelemnte vamos receber parametros em snake case do front
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }], // nesse caso podemos declarar `next` sem usar
  },
};
