module.exports = {
    'POST /signin': async(ctx, next) => {
        var email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';

        if (email === 'admin@example.com' && password === '123456') {
            console.log('登录成功!');
            ctx.render('signin-ok.html', {
                title: '登录成功了,哈哈哈',
                name: 'fangcao'
            });
        } else {
            console.log('登录失败!');
            ctx.render('signin-failed.html', {title: '登录失败了'});
        }
    }
};