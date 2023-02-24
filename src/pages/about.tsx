import MyProfile from '@/components/About/MyProfile';
import Container from '@/components/Container';
import Title from '@/components/Title';

export default function About() {
  return (
    <Container>
      <Title title='About' description='방문해주셔서 감사합니다.' />
      <MyProfile />
    </Container>
  );
}
