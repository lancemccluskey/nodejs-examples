const Piscina = require('piscina');

const workerPool = new Piscina({
  filename: __dirname + '/worker.js',
});

(async function() {
  const result = await workerPool.runTask({ a: 4, b: 6 });
  console.log(result);
})();
