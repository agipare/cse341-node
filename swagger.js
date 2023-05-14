const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My contacts API',
    description: 'Contacts Api'
  },
  host: 'https://cse341-nodejs.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
 swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
   await import('./index.js');
 });