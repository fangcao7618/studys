var koa = require('koa');
var route = require('koa-route');
var cors = require('koa-cors');
var app = new koa();

app.use(cors());

app.use(route.get('/', function() {
  this.body = { msg: 'Hello World!' };
}));

app.listen(3000);