const express = require("express");
const path = require("path");
const app = express();
const PORT = 8888;

app.use(express.static('public'));

app.use('/src', express.static('src'));

app.get("*", (req, res) => {
  console.log('res', req.url)
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`)
})