import Container from '@/components/Container';
import RecentPosts from '@/components/RecentPosts';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import sky from '../../public/imgs/sky.jpeg';

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Image src={sky} alt='sky' width={720} height={300} />
      <RecentPosts posts={posts} />
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
