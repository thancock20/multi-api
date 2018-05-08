module.exports = ctx => ({
  ip: ctx.ip,
  lang: ctx.acceptsLanguages()[0],
  os: ctx.userAgent.os
});
