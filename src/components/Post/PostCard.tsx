import convertDateUs from '@/lib/convertDateUs';
import Link from 'next/link';
import { PostContainer } from './PostCard.style';

export default function PostCard({ post, slug }) {
  return (
    <Link href={`/blog/${slug}`}>
      <PostContainer>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <span>{convertDateUs(post.date)}</span>
      </PostContainer>
    </Link>
  );
}
