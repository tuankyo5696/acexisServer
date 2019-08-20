const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { mongoURI } = require('./config/key');
require('dotenv').config();
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true })
  .then(console.log('connect to Acexis db'))
  .catch(console.log());

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/acexis/customer', require('./route/api/customerApi'));

app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT);
});
