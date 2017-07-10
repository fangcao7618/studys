const koa = require('koa');
const co = require('co');
var app = new koa();

console.log('===================');

// app.use(function * (next) {
//     console.log('>> one');
//     yield next;
//     console.log('<< one');
// });

// app.use(function * (next) {
//     console.log('>> two');
//     this.body = 'two';
//     console.log('<< two');
// });

// app.use(function * (next) {
//     console.log('>> three');
//     yield next;
//     console.log('<< three');
// });

// console.log('********************');
app.use(function * (next) {
    this.body = '1';
    yield next;
    this.body += '5';
    console.log(this.body);
});
app.use(function * (next) {
    this.body += '2';
    yield next;
    this.body += '4';
});
app.use(function * (next) {
    this.body += '3';
});


co(function *(){
  // yield any promise
  var result = yield Promise.resolve(true);
}).catch(onerror);

co(function *(){
  // resolve multiple promises in parallel
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var res = yield [a, b, c];
  console.log(res);
  // => [1, 2, 3]
}).catch(onerror);

// errors can be try/catched
co(function *(){
  try {
    yield Promise.reject(new Error('boom'));
  } catch (err) {
    console.error(err.message); // "boom"
 }
}).catch(onerror);

function onerror(err) {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!!
  console.error(err.stack);
}


app.use(function *(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});

app.use(function *(next) {
  throw new Error('some error');
})

app.listen(5000);