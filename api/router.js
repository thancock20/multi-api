const Router = require('koa-router');
const mongoose = require('mongoose');
const fetch = require('node-fetch');

const timestamp = require('./timestamp');
const parser = require('./parser');
const createShurl = require('./create-shurl');
const openShurl = require('./open-shurl');
const doISearch = require('./do-i-search');
const recentISearch = require('./recent-i-search');

const router = new Router();
mongoose.connect(process.env.DB);

const Shurl = require('./models/shurl');
const ISearch = require('./models/isearch');

router.get('/timestamp/:date', ctx => {
  ctx.body = timestamp(ctx.params.date);
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

router.get('/isearch', async ctx => {
  ctx.body = await doISearch(ctx.query, ISearch, fetch);
});

router.get('/isearch/recent', async ctx => {
  ctx.body = await recentISearch(ISearch);
});

router.get('*', ctx => {
  ctx.body = [];
});

module.exports = router;
