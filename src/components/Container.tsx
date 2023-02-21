import React from 'react';
import metadata from '../data/metadata';
import Head from 'next/head';
import { Layout, Main } from './Container.style';
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('./Nav'), { ssr: false });

export default function Container({ children }) {
  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Nav />
      <Main>
        <div className='contents'>{children}</div>
      </Main>
    </Layout>
  );
}
