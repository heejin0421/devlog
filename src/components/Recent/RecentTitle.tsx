import Link from 'next/link';
import {
  PostMore,
  RecentTitleContainer,
  RecentTitleText,
} from './RecentTitle.style';

interface RecentTitleProps {
  title: string;
  path: string;
  subtitle: string;
}

export default function RecentTitle({
  title,
  path,
  subtitle,
}: RecentTitleProps) {
  return (
    <RecentTitleContainer>
      <RecentTitleText>최근 {title}</RecentTitleText>
      <Link href={path}>
        <PostMore>ALL {subtitle}S</PostMore>
      </Link>
    </RecentTitleContainer>
  );
}
