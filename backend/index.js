const express = require('express');

const path = require("path");
const app = express();

const port = process.env.PORT || 5000;


app.use(express.static(path.resolve(__dirname,'../frontend/public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/public', 'index.html'));
});

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
