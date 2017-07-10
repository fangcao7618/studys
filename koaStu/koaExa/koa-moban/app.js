var koa = require('koa');
var render = require('koa-swig');
var path=require('path');
var app = new koa();
app.context.render = render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    // locals: locals,
    // filters: filters,
    // tags: tags,
    // extensions: extensions
});

app.use(function * () {
    yield this.render('index');
});

app.listen(2333);