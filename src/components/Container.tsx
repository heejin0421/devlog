import React from 'react';
import metadata from '../data/metadata';
import Head from 'next/head';
import Nav from './Nav';
import { Layout, Main } from './Container.style';

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
