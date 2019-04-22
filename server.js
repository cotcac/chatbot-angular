const express = require('express');
const path = require('path');

const port = process.env.PORT || 3021;
const app = express();

app.use(express.static(path.join(__dirname, 'dist/tv-front')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/tv-front/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});