import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, title }) => (
  <div className="container">
    <Head>
      <title>{title ? `Multi-API | ${title}` : 'Multi-API'}</title>
      <meta charSet="utf8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Sans+Pro|Source+Serif+Pro"
        rel="stylesheet"
      />
    </Head>
    <Header title={title || 'Multi-API'} />
    {children}
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      html {
        font-size: 1.5vmax;
        font-family: 'Source Sans Pro', sans-serif;
        line-height: 1.42857143;
      }

      body {
        color: #333;
        background-color: #fff;
      }

      h2 {
        font-family: 'Source Serif Pro', serif;
        font-size: 2rem;
        margin-bottom: 0;
      }

      .container {
        width: 70vw;
        margin-left: 15vw;
      }
    `}</style>
  </div>
);

export default Layout;
