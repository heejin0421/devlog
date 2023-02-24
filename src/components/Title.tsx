import { TitleContainer } from './Title.style';

export default function Title({ title, description }) {
  return (
    <TitleContainer>
      <h1>{title}</h1>
      <p>{description}</p>
    </TitleContainer>
  );
}
