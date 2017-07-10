const router = require('koa-router')()

router.prefix('/users')
router.get('/', async (ctx, next) => {
  await ctx.render('users', {
    title: 'Hello Koa 2!'
  })
})
router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
