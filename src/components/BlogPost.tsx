import Link from 'next/link';

export default function BlogPost({ date, title, description, slug }: any) {
  return (
    <Link href={`/blog/${slug}`}>
      <div>{date}</div>
      <div>{title}</div>
      <div>{description}</div>
    </Link>
  );
}
