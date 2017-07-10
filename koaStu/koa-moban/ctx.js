const koa = require('koa');
const ip=require('ip');
const app = new koa();

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;


app.use(function * (next) {
    console.log('>> one');
    yield next;
    console.log('<< one');
});

app.use(function * (next) {
    console.log('>> two');
    this.body = 'two';
    console.log('<< two');
});

app.use(function * (next) {
    console.log('>> three');
    yield next;
    console.log('<< three');
});


app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  var 
      c = require('child_process'),
      address=ip.address(),
      link = 'http://' + address + ':'+port;
  c.exec('open ' + link);
  console.info(`==> 🌎 Listening on  ${address} : ${port}`);
});