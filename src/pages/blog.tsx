import Container from '@/components/Container';
import PostCard from '@/components/Post/PostCard';
import PostSearch from '@/components/Post/PostSearch';
import Title from '@/components/Title';
import metadata from '@/data/metadata';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchPost, setSearchPost] = useState('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPost(event.target.value);
  };

  const searchResults = posts.filter((post) =>
    post.title.toLowerCase().includes(searchPost.toLowerCase())
  );

  return (
    <Container>
      <NextSeo
        title='blog'
        description='블로그 메뉴입니다!'
        canonical={`${metadata.meta.url}/blog`}
        openGraph={{ url: `${metadata.meta.url}/blog` }}
      />
      <Title
        title='Blog'
        description='공유하고 싶거나 배워서 익힌 기술들을 정리합니다.'
      />
      <PostSearch onChangeHandler={onChangeHandler} />
      {searchResults.map((post, idx) => {
        return <PostCard post={post} key={idx} slug={post.slug} />;
      })}
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};
