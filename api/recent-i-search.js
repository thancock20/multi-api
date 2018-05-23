module.exports = async ISearch =>
  ISearch.find()
    .sort({ when: -1 })
    .limit(10)
    .select('term when -_id');
