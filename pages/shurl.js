import Code from '../components/Code';
import Layout from '../components/Layout';
import getHostname from '../utils/get-hostname';

// eslint-disable-next-line no-undef
class Shurl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hostname: ''
    };
  }

  componentDidMount() {
    this.setState({ hostname: getHostname() });
  }

  render() {
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
            <a>http://www.example.com</a> format, the JSON response will contain
            an error instead.
          </li>
        </ul>

        <h2>Example usage (New Short URL):</h2>
        <Code>{this.state.hostname}/api/shurl?url=http://www.google.com</Code>

        <h2>Example Output:</h2>
        <Code>
          {`{ "original_url": "http://www.google.com", "short_url": "${
            this.state.hostname
          }/api/shurl/1" }`}
        </Code>

        <h2>Usage:</h2>
        <Code>{this.state.hostname}/api/shurl/1</Code>

        <h2>Will Redirect To:</h2>
        <Code>http://www.google.com</Code>
      </Layout>
    );
  }
}

export default Shurl;
