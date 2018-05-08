/* eslint no-restricted-globals: 0 */
export default req => {
  if (req) {
    return `http://${req.headers.host}`;
  }
  return location.hostname === 'localhost'
    ? `http://localhost:${location.port}`
    : `${location.protocol}//${location.hostname}`;
};
