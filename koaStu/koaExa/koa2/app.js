const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')();
const controllers=require('./controllers')();

const app = new Koa();


app.use(async(ctx, next) => {
    console.log(`过程 ${ctx.request.method} ${ctx.request.url}`);
    await next();
});
app.use(bodyParser);

app.use(controllers);

app.listen(3000);
console.log('app started at port 3000...');