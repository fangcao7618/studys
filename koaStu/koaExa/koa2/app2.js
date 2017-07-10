const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')();
const fs = require('fs');

const app = new Koa();


app.use(async(ctx, next) => {
    console.log(`过程 ${ctx.request} ${ctx.request.method} ${ctx.request.url}`);
    await next();
});
app.use(bodyParser);


var files = fs.readdirSync(__dirname + '/controllers');

// 过滤出.js文件:
var js_files = files.filter((f)=>{
    return f.endsWith('.js');
});

// 处理每个js文件:
for (var f of js_files) {
    console.log(`process controller: ${f}...`);
    // 导入js文件:
    let mapping = require(__dirname + '/controllers/' + f);
    for (var url in mapping) {
        console.log(`${url}  ==========`);
        if (url.startsWith('GET ')) {
            // 如果url类似"GET xxx":
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            // 如果url类似"POST xxx":
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            // 无效的URL:
            console.log(`invalid URL: ${url}`);
        }
    }
}

app.use(router.routes());


app.listen(3000);
console.log('app started at port 3000...');