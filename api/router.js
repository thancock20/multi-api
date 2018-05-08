const Router = require('koa-router');
const timestamp = require('./timestamp');

const router = new Router();

router.get('/timestamp/:date', ctx => {
  ctx.body = timestamp(ctx.params);
});

module.exports = router;
