import React from 'react';
import Head from 'next/head';
import { Layout, Main } from './Container.style';
import dynamic from 'next/dynamic';
import Footer from './Footer';

const Nav = dynamic(() => import('./Nav'), { ssr: false });

export default function Container({ children }) {
  return (
    <Layout>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <Nav />
      <Main>
        <div className='contents'>{children}</div>
      </Main>
      <Footer />
    </Layout>
  );
}
