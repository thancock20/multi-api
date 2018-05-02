import Code from '../components/Code'
import Layout from '../components/Layout'

const code = `Testing the code component
Across mutiple lines`

const Index = () => (
  <Layout>
    <React.Fragment>
      <p>Hello, World!</p>
      <Code>{ code }</Code>
    </React.Fragment>
  </Layout>
)

export default Index
