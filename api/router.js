const Router = require('koa-router');
const timestamp = require('./timestamp');
const parser = require('./parser');

const router = new Router();

router.get('/timestamp/:date', ctx => {
  ctx.body = timestamp(ctx.params);
});

router.get('/parser', ctx => {
  ctx.body = parser(ctx);
});

module.exports = router;
