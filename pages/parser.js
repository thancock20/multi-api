import Code from '../components/Code';
import Layout from '../components/Layout';
import getHostname from '../utils/get-hostname';

// eslint-disable-next-line no-undef
class Timestamp extends React.Component {
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
      <Layout title="Request Header Parser">
        <p>Implements the following User story:</p>
        <ul>
          <li>
            I can get the IP address, language, and operating system for my
            browser.
          </li>
        </ul>

        <h2>Example usage:</h2>
        <Code>{this.state.hostname}/api/parser</Code>

        <h2>Example Output:</h2>
        <Code>
          {`{ "ip": "::ffff:10.150.148.118", "lang": "en-US", "os": "Linux 64" }`}
        </Code>
      </Layout>
    );
  }
}

export default Timestamp;
