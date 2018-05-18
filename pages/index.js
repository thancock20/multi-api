import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <ul>
      <li>
        <Link href="/timestamp">
          <a>Timestamp</a>
        </Link>
      </li>
      <li>
        <Link href="/parser">
          <a>Request Header Parser</a>
        </Link>
      </li>
      <li>
        <Link href="/shurl">
          <a>URL Shortener</a>
        </Link>
      </li>
    </ul>
  </Layout>
);

export default Index;
