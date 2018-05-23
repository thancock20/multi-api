const isInt = offset => Number.isInteger(Number(offset));

const saveISearch = async (term, ISearch) => ISearch.create({ term });

const fetchResults = async (term, offset, fetch) => {
  const prefix = 'https://www.googleapis.com/customsearch/v1';
  const cx = process.env.CSE_CX;
  const key = process.env.CSE_KEY;
  const start = offset + 1;
  const URI = `${prefix}?q=${term}&cx=${cx}&key=${key}&start=${start}&num=10&searchType=image`;
  const res = await fetch(URI);
  return res.json();
};

module.exports = async ({ term, offset = 0 }, ISearch, fetch) => {
  if (!term) return { error: 'missing search term' };
  if (!isInt(offset)) return { error: 'offset must be integer' };
  await saveISearch(term, ISearch);
  const { items } = await fetchResults(term, Number(offset), fetch);
  return items.map(item => ({
    imageUrl: item.link,
    altText: item.title,
    pageUrl: item.image.contextLink
  }));
};
