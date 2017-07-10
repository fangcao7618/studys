var koa = require('koa');
var app = new koa();

app.use(function *(next){
  this.body = 'Hello World';
  yield next;
});

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms hhahahaha');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
  this.body = 'Hello World';
});

app.on('error', function(err){
  log.error('server error', err);
});

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});

app.listen(3000);
