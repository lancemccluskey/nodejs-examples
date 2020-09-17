
const crypto = require('crypto');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.send('Hello world');
  });
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});

