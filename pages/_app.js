import Layout from '../component/Layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
   <Head>
        <title>Tos Mer | Home</title>
        <meta name="keywords" content="news"></meta>
    </Head>
    <Layout>
        <Component {...pageProps}/>
    </Layout>
  </>
  )
}

export default MyApp
