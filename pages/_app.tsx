import '../styles/index.sass';
import '../styles/sheet.sass';
import '../styles/sheet-animations.sass';
import '../styles/sheet-mobile.sass';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stefan Ginev — CV</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
