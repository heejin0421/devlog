import {
  MDXPostContainer,
  MDXPostContent,
  MDXPostHead,
  MDXPostSection,
} from './MDXPost.style';

export default function MDXPost({ title, date, children }) {
  return (
    <MDXPostContainer>
      <MDXPostHead>
        <p>{date}</p>
        <h1>{title}</h1>
      </MDXPostHead>

      <MDXPostSection>
        <MDXPostContent>{children}</MDXPostContent>
      </MDXPostSection>
    </MDXPostContainer>
  );
}
