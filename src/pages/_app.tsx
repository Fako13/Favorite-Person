import '@/styles/index.scss';

import { AppProps } from 'next/app';

import Layout from '@/layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
