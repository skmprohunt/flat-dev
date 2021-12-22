const express = require('express');

const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "public", "index.html"));
//});

app.use(express.static('../frontend/public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
