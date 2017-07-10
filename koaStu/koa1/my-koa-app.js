'use strict';

const Koa = require('koa');

const app=new Koa();

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    console.log(`Start: ${start}ms`); // 打印耗费时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});
function checkUserPermission(ctx){
    console.log('判断权限2');
    return true;
}
app.use(async (ctx, next) => {
    console.log('判断权限start');
    if (await checkUserPermission(ctx)) {
        console.log('判断权限3');
        await next();
        console.log('判断权限4');
    } else {
        console.log('判断权限5');
        ctx.response.status = 403;
    }
});

app.use(async (ctx, next) => {
    console.log('显示文本了111111111');
    await next();
    console.log('显示文本了222222222');
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});


app.listen(7001);
console.log('监听开始 port:7001...');