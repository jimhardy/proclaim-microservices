const tecReportsRoutes = require('./tecReports');
const duplicateCheckRoutes = require('./duplicateCheck');

const routes = [...tecReportsRoutes , duplicateCheckRoutes];

module.exports = routes;
