const Router = require('koa-router');
const mongoose = require('mongoose');

const timestamp = require('./timestamp');
const parser = require('./parser');
const createShurl = require('./create-shurl');
const openShurl = require('./open-shurl');

const router = new Router();
mongoose.connect(process.env.DB || 'mongodb://localhost:27017/multi-api');

const Shurl = require('./models/shurl');

router.get('/timestamp/:date', ctx => {
  ctx.body = timestamp(ctx.params);
});

router.get('/parser', ctx => {
  ctx.body = parser(ctx);
});

router.get('/shurl', async ctx => {
  ctx.body = await createShurl(ctx, Shurl);
});

router.get('/shurl/:id', async ctx => {
  const url = await openShurl(ctx.params.id, Shurl);
  if (url) ctx.redirect(url);
  else ctx.body = { error: 'nonexistent short_url' };
});

router.get('*', ctx => {
  ctx.body = [];
});

module.exports = router;
