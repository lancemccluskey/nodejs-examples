const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`HASH: ${Date.now() - start}ms`);
  });
}

function doRequest() {
  https.request('https://www.google.com', res => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log(`REQUEST: ${Date.now() - start}ms`);
    });
  }).end();
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
  console.log(`FS: ${Date.now() - start}ms`);
});

doHash();
doHash();
doHash();
doHash();
