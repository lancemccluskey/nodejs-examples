process.env.UV_THREADPOOL_SIZE = 1;
const crypto = require('crypto');
const start = Date.now();

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`${Date.now() - start}ms`);
  });
}

doHash();
doHash();
doHash();
doHash();
doHash();
