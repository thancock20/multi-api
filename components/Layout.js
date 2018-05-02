import Head from 'next/head'

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title ? `Multi-API | ${title}` : 'Multi-API' }</title>
      <meta charset='utf8' />
      <meta name='viewport' content='initial-scale=1, width=device-width' />
    </Head>
    { children }
  </div>
)

export default Layout
