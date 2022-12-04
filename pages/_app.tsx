import Head from 'next/head';
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session} >
      <CssBaseline enableColorScheme />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>    
  );
};

export default MyApp
