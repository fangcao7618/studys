// index:

module.exports = {
    'GET /': async (ctx, next) => {
        let user = ctx.state.user;
        if (user) {
            ctx.render('room.html', {
                user: user
            });
        } else {
            ctx.response.redirect('/signin');
        }
    },
    'GET /2': async(ctx, next) => {
        ctx.render('index.html', {title: 'Welcome'});
    }
};