const cluster = require('cluster');

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
} else {
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hello world');
  });

  app.get('/fast', (req, res) => {
    res.send('Hello world fast');
  });

  app.listen(3000, () => {
    console.log('Listening on 3000');
  });
}
