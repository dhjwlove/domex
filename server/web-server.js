const express = require("express");
const path = require("path");
const app = express();
const PORT = 8888;


app.use(express.static('public'));

app.use(express.static('src'));

// console.log('test')

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`)
})