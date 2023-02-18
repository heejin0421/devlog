import React from 'react';
import metadata from '../data/metadata';
import Head from 'next/head';
import { Layout, Main } from './Container.style';
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('./Nav'), { ssr: false });

export default function Container(props) {
  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <header>
        <Nav />
      </header>
      <Main>{props.children}</Main>
    </Layout>
  );
}
