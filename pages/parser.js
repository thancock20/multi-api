import Code from '../components/Code';
import Layout from '../components/Layout';
import useHostname from '../hooks/use-hostname';

const Parser = () => {
  const hostname = useHostname();

  return (
    <Layout title="Request Header Parser">
      <p>Implements the following User story:</p>
      <ul>
        <li>
          I can get the IP address, language, and operating system for my
          browser.
        </li>
      </ul>

      <h2>Example usage:</h2>
      <Code>
        {hostname}
        /api/parser
      </Code>

      <h2>Example Output:</h2>
      <Code>
        {'{ "ip": "::ffff:10.150.148.118", "lang": "en-US", "os": "Linux 64" }'}
      </Code>
    </Layout>
  );
};

export default Parser;
