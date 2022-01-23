import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="OIk6sJu3nmgUIb9c-yV6DvU_P4KyXctrKxF8ZukWjQE"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
