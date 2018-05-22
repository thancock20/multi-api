const moment = require('moment');

moment().utc();

const getTimestamp = date => {
  const timestamp = moment.unix(date);
  return timestamp.isValid() ? timestamp : moment(new Date(date));
};

const formatTimestamp = timestamp => ({
  unix: timestamp.isValid() ? moment(timestamp).format('X') : null,
  natural: timestamp.isValid() ? moment(timestamp).format('MMMM D, YYYY') : null
});

module.exports = date => formatTimestamp(getTimestamp(date));
