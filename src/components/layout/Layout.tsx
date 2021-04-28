import * as React from 'react'
import Head from 'next/head'
import Header from './Header'


type Props = {
  title?: string,
}
const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
      <link rel="stylesheet" href="/css/sb-admin-2.min.css"/>
      <script src="/js/jquery.min.js"></script>
      <script src="/js/bootstrap.bundle.min.js"></script>
      <script src="/js/jquery.easing.min.js"></script>
      <script src="/js/sb-admin-2.min.js"></script>
    </Head>
    <div id="wrapper">
        <Header/>
        <div className="d-flex flex-column">
            {/* <Navbar/> */}
        {children}
        <footer className="sticky-footer bg-white">
        <hr />
        <span>I'm here to stay (Footer)</span>
        </footer>
        </div>
    </div>
  </div>
)

export default Layout