const express = require("express");
const path = require("path");
const app = express();
const PORT = 8888;
const productListJson = require('./coffee_product_list.json')

app.use('/static', express.static('public'));

app.get('/productList', (req, res) => {
  res.send(200, productListJson);
})

app.get('/products/:id', (req, res) => {
})

app.use('/src', express.static('src'));

app.get("*", (req, res) => {
  console.log('res', req.url)
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`);
})