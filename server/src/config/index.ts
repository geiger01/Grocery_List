var configuration;

// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  configuration = require('./prod')
} else {
  // we are in development - return the dev keys!!!
  configuration = require('./dev')
}

module.exports = configuration