const Koa = require('koa');
const render = require('koa-ejs');
const path = require('path');
const logger = require('koa-logger');

const app = new Koa();

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'temp',
  viewExt: 'html',
  cache: false,
  debug: false,
});

app.use(function (ctx, next) {
  ctx.state = ctx.state || {};
  ctx.state.now = new Date();
  ctx.state.ip = ctx.ip;
  ctx.state.version = '2.0.0';
  return next();
});

app.use(async function (ctx) {
  const users = [{ name: 'Dead Horse' }, { name: 'Jack' }, { name: 'Tom' }];
  await ctx.render('content', {
    users
  });
});

app.use(logger());
if (process.env.NODE_ENV === 'test') {
  module.exports = app.callback();
} else {
  app.listen(7001);
  console.log('open http://localhost:7001');
}

app.on('error', function (err) {
  console.log(err.stack);
});