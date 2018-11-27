/* eslint no-restricted-globals: 0 */
import { useState, useEffect } from 'react';

const useHostname = () => {
  const [hostname, setHostname] = useState('');

  useEffect(() =>
    setHostname(
      location.hostname === 'localhost'
        ? `http://localhost:${location.port}`
        : `${location.protocol}//${location.hostname}`
    )
  );

  return hostname;
};

export default useHostname;
