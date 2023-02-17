import Container from '@/components/Container';
import RecentPosts from '@/components/RecentPosts';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <span>Home</span>

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
