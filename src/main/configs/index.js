const { NETWORK_FIRST, NETWORK_ONLY } = require('./strategies');

module.exports = {
  'AUTH/LOGIN': {
    strategy: NETWORK_FIRST,
  },

  CATEGORIES: {
    strategy: NETWORK_ONLY,
  },
};
