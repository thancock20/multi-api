const isInt = id => Number.isInteger(Number(id));

const getShurl = async (id, Shurl) => Shurl.findById({ _id: id });

module.exports = async (id, Shurl) => {
  const doc = isInt(id) ? await getShurl(id, Shurl) : null;
  return doc ? doc.original_url : null;
};
