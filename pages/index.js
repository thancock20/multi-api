import Code from '../components/Code'

const code = `Testing the code component
Across mutiple lines`

const Index = () => (
    <React.Fragment>
      <p>Hello, World!</p>
      <Code>{ code }</Code>
    </React.Fragment>
)

export default Index
