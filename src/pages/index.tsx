import Head from 'next/head';

import MainBanner from '@/components/Banners/Main/MainBanner.component';

const Home = () => (
  <>
    <Head>
      <title>Harry Potter - Поиск любимого персонажа</title>
    </Head>
    <MainBanner />
  </>
);

export default Home;
