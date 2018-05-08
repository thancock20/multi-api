/* eslint no-restricted-globals: 0 */
export default () =>
  location.hostname === 'localhost'
    ? `http://localhost:${location.port}`
    : `${location.protocol}//${location.hostname}`;
