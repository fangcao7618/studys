var koa = require('koa');
var render = require('koa-swig');
var path=require('path');
const views = require('koa-views');
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const onerror = require('koa-onerror');
const logger = require('koa-logger')
var app = new koa();
var port=process.env.PORT || 5000;

// const index = require('./routes/index');
// const users = require('./routes/users');

// onerror(app)

// app.use(bodyparser({
//   enableTypes:['json', 'form', 'text']
// }));
// app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'html'
}))

app.context.render = render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html'
    // locals: locals,
    // filters: filters,
    // tags: tags,
    // extensions: extensions
});
app.use(function * () {
    yield this.render('index');
});

// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

app.listen(port);