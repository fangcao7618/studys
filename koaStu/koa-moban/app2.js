var co = require('co');
var koa = require('koa');
var render = require('koa-swig');
var staticServer = require('koa-static');
var app = new koa();

app.context.render = co.wrap(render({
  // ...your setting
  writeBody: false
}));


app.use(async ctx => ctx.body = await ctx.render('index'));

app.listen(2000);