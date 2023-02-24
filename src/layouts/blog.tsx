import Container from '@/components/Container';
import MDXPost from '@/components/Post/MDXPost';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function BlogLayout({ post }) {
  console.log('post', post);
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <Container>
      <MDXPost title={post.title} date={post.date}>
        <MDXComponent />
      </MDXPost>
    </Container>
  );
}
