const koa=require('koa');

const app=new koa();

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


app.listen(3000);