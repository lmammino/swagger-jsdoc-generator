const exec = require('child_process').exec;
const test = require('ava').test;

test('It should generate the expected swagger file', t => {
  const command = './index.js fixtures/sampleConfig.js';
  exec(command, (err, stdout) => {
    if (err) {
      console.error(err, stdout);
      return t.error(err);
    }

    const swaggerOutput = JSON.parse(stdout);
    const expectedOutput = require('./fixtures/expectedSwagger.json');
    t.deepEqual(swaggerOutput, expectedOutput);
  });
});
