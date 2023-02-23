import Link from 'next/link';
import {
  RecentPostContainer,
  PostCard,
  PostTitle,
  PostDes,
} from './RecentPosts.style';
import RecentTitle from './RecentTitle';

export default function RecentPosts({ posts }) {
  return (
    <section>
      <RecentTitle title='포스트' path='blog' subtitle='POST' />
      <RecentPostContainer>
        {posts.slice(0, 5).map((post) => (
          <Link key={post._id} href={`/blog/${post._raw.flattenedPath}`}>
            <PostCard>
              <PostTitle>{post.title}</PostTitle>
              <PostDes>{post.description}</PostDes>
            </PostCard>
          </Link>
        ))}
      </RecentPostContainer>
    </section>
  );
}
