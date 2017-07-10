const oauthserver = require('koa-oauth-server');
const koa = require('koa');

var app = new koa();

app.oauth = oauthserver({
    model: {}, // 查看https://github.com/thomseddon/node-oauth2-server for specification
    grants: ['password'],
    debug: true
});

app.use(app.oauth.authorise());

app.use(function * (next) {
    this.body = 'Secret area';
    yield next;
});

app.listen(3000);