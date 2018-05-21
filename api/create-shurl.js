const isValid = url => url.search(/^https*:\/\/.*\..*$/) !== -1;

const saveShurl = async (url, Shurl) => Shurl.create({ original_url: url });

const idToShurl = ({ origin, path }, id) => `${origin}${path}/${id}`;

/* eslint-disable no-underscore-dangle, camelcase */
module.exports = async (ctx, Shurl) => {
  const { url } = ctx.query;
  if (!url) return { error: 'missing URL' };
  if (!isValid(url)) return { error: 'invalid URL' };
  const { original_url, _id } = await saveShurl(url, Shurl);
  return {
    original_url,
    short_url: idToShurl(ctx, _id)
  };
};
