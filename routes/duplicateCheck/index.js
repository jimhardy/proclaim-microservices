const duplicateCheckHandler = require('../../handlers/duplicateCheck');

const duplicateCheckRoutes = [
  {
    method: 'GET',
    path: '/api/duplicatecheck',
    options: {
      handler: duplicateCheckHandler.duplicateCheck
    }
  }
];

module.exports = duplicateCheckRoutes;
