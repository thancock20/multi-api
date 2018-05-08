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
      <Layout title="Timestamp">
        <p>Implements the following User stories:</p>
        <ul>
          <li>
            I can pass a string as a parameter, and it will check to see whether
            that string contains either a unix timestamp or a natural language
            date (example: January 1, 2016).
          </li>
          <li>
            If it does, it returns both the Unix timestamp and the natural
            language form of that date.
          </li>
          <li>
            If it does not contain a date or Unix timestamp, it returns null for
            those properties.
          </li>
        </ul>

        <h2>Example usage:</h2>
        <Code>{this.state.hostname}/api/timestamp/May 7, 2018</Code>
        <Code>{this.state.hostname}/api/timestamp/1525669200</Code>

        <h2>Example Output:</h2>
        <Code>{`{ "unix": "2525669200", "natural", "May 7, 2018" }`}</Code>
      </Layout>
    );
  }
}

export default Timestamp;
