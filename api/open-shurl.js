module.exports = async (id, Shurl) => {
  const doc = await Shurl.findById({ _id: id });
  if (!doc) return null;
  return doc.original_url;
};
