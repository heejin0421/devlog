import Container from '@/components/Container';
import ProfileInfo from '@/components/ProfileInfo';
import RecentPosts from '@/components/Recent/RecentPosts';
import RecentProject from '@/components/Recent/RecentProject';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import * as allProjects from '../data/projects';

export default function Home({
  posts,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <ProfileInfo />
      <RecentPosts posts={posts} />
      <RecentProject projects={projects} />
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  const projects = [...allProjects.default].reverse().splice(0, 2);
  return {
    props: {
      posts,
      projects,
    },
  };
};
