import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from './Footer'
import Navbar from './Navbar'


type Props = {
  title?: string,
}
const Frontlayout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" ></script>
        {/* <!-- Google fonts--> */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        {/* <!-- Core theme CSS (includes Bootstrap)--> */}
        <link href="https://startbootstrap.github.io/startbootstrap-freelancer/css/styles.css" rel="stylesheet" />


        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Third party plugin JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="https://startbootstrap.github.io/startbootstrap-freelancer/js/scripts.js"></script>
    </Head>
        {/* Navigation*/}
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
            <Link href="/"><a className="navbar-brand js-scroll-trigger">Mi Tani</a></Link>
            <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <Navbar/>
            </div>
        </div>
    </nav>

    {/* Masthead*/}
    {children}
    <Footer/>
  </div>
)

export default Frontlayout