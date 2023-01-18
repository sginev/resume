// import '@/styles/globals.css'
// import '@/styles/orbit-6.css';
// import '@/styles/bootstrap.min.css';
import '@/styles/bulk.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My new cool app</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
