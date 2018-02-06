var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var history = require('connect-history-api-fallback');
var proxy = require('http-proxy-middleware');
var axios = require('axios');
var querystring = require('querystring');
var bodyParser = require('body-parser');

var app = express();
var compiler = webpack(config);

app.use(history());
app.use(proxy('/api', { target: 'http://localhost:8080', changeOrigin: true }));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());
app.post('/login', function (req, res) {
  var body = req.body;
  var params = {
    username: body.username,
    password: body.password,
    grant_type: 'password',
    client_id: 'teste',
    client_secret: 'teste'
  };
  axios.post('http://localhost:8080/oauth/token', querystring.stringify(params)).then(function (response) {
    res.send(response.data);
  }).catch(function (error) {
    res.status(error.response.status).send(error.response.data);
  });
});
app.delete('/logout', function (req, res) {
  var token = req.headers.authorization;
  token = token.substr(6);
  axios.post('http://localhost:8080/oauth/token/revokeById/' + token).then(function (result) {
    res.send({});
  }).catch(function (error) {
    res.send({});
  });
})

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
