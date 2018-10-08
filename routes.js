const routes = require('next-routes')();

// :address is a wildcard for a url (here: block chain address)
routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests','/campaigns/requests/index')
  .add('/campaigns/:address/requests/new','/campaigns/requests/new');


module.exports = routes;
