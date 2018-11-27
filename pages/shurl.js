import Code from '../components/Code';
import Layout from '../components/Layout';
import useHostname from '../hooks/use-hostname';

const Shurl = () => {
  const hostname = useHostname();

  return (
    <Layout title="URL Shortener">
      <p>Implements the following User stories:</p>
      <ul>
        <li>
          I can pass a URL as a query parameter and I will receive a shortened
          URL in the JSON response.
        </li>
        <li>
          When I visit that shortened URL, it will redirect me to my original
          link.
        </li>
        <li>
          If I pass an invalid URL that does not follow the valid{' '}
          &quot;http://www.example.com&quot; format, the JSON response will
          contain an error instead.
        </li>
      </ul>

      <h2>Example usage (New Short URL):</h2>
      <Code>
        {hostname}
        /api/shurl?url=http://www.google.com
      </Code>

      <h2>Example Output:</h2>
      <Code>
        {`{ "original_url": "http://www.google.com", "short_url": "${hostname}/api/shurl/1" }`}
      </Code>

      <h2>Usage:</h2>
      <Code>
        {hostname}
        /api/shurl/1
      </Code>

      <h2>Will Redirect To:</h2>
      <Code>http://www.google.com</Code>
    </Layout>
  );
};

export default Shurl;
