'use strict';

const path = require('path');

module.exports = {
  swaggerDefinition: {
    info: {
      title: 'My api',
      version: '1.0.0',
    },
  },
  apis: [path.join(__dirname, 'sampleApi.js')]
};
