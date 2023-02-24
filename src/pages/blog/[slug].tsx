import Container from '@/components/Container';
import BlogLayout from '@/layouts/blog';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

  return <BlogLayout post={post} />;
}

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  return {
    props: {
      post,
    },
  };
};
