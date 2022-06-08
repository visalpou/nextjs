import Layout from "../Layout/Layout";
import env from './../env';
import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps,topic }) {
  return (
    <>
      <Head>
        <title>Tos Mer | Home</title>
        <meta name="keywords" content="news"></meta>
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout {...pageProps} topic={topic}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
MyApp.getInitialProps = async () => {
  const data = await fetch(`${env.apiUrl}/topic/`);
  const topic = await data.json();
  return { topic: topic.results };
};

export default MyApp;
