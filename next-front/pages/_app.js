import Layout from './../components/Layout'
import env from './../env'
import '../styles/index.css'
import 'swiper/swiper.min.css'
import React from 'react'
import moment from 'moment'
import 'moment/locale/km'
import Head from 'next/head'
moment.locale('km')

function MyApp({ Component, pageProps, categories }) {
  return<>
  <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <link rel="manifest" href="/manifest.json" />
      <link
        href="/logo.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/logo.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#317EFB" />
  </Head>
   <Layout {...pageProps} categories={categories}>
    <Component {...pageProps} />
  </Layout>
  </>
}
MyApp.getInitialProps = async () => {
  const data = await fetch(`${env.apiUrl}/categories_list`)
  const categories = await data.json()
  return { categories: categories }
}

export default MyApp
