import Link from 'next/link';
import {
  RecentTitle,
  RecentPostContainer,
  PostCard,
  PostTitle,
  PostDes,
} from './RecentPosts.style';

export default function RecentPosts({ posts }) {
  return (
    <section>
      <RecentTitle>최근 포스트</RecentTitle>
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
