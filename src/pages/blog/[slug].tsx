import Container from '@/components/Container';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXComponent = useMDXComponent(post.body.code);

  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

  return (
    <Container customMeta={customMeta}>
      <div>
        <div>{post.title}</div>
      </div>
      <MDXComponent />
    </Container>
  );
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
