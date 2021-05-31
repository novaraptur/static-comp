
const express = require('express');
const app = express();
app.use(express.static("public"));
const path = require('path');
const port = 3000;

app.get('/', (reqest, response) => {
  response.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
