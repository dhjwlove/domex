const express = require("express");
const path = require("path");
const app = express();
const PORT = 8888;


app.use(express.static('public'));

app.get("/", (req, res) => { 
  res.sendFile(path.join(__dirname, '../index.html'));
})

app.get("/src/index", (req, res) => { 
  res.sendFile(path.join(__dirname, '../src/index.js'));
})

app.get("/src/*", (req, res) => { 
  res.sendFile(path.join(__dirname, '../src/App.js'));
})

// app.get("/src/index.js", (req, res) => { 
//   res.sendFile(path.join(__dirname, '../src/index.js'));
// })

app.listen(PORT, () => { 
  console.log(`Listen : ${PORT}`)
})