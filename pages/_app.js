import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
    
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9683433840347502"
     crossorigin="anonymous"></script>
      </Head>

      <Component {...pageProps} />

    </>
  );
}

export default MyApp
