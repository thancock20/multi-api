import Code from '../components/Code';
import Layout from '../components/Layout';
import Link from 'next/link';

const code = `const sum = (a, b) => a + b;
console.log(sum(1,2)) // 3`;

const Index = () => (
  <Layout>
    <React.Fragment>
      <p>Hello, World!</p>
      <h2>Some code:</h2>
      <Code>{code}</Code>
      <Link href="/timestamp">
        <a>timestamp</a>
      </Link>
    </React.Fragment>
  </Layout>
);

export default Index;
