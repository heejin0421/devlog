import Container from '@/components/Container';
import ProjectCards from '@/components/Project/ProjectCards';
import Title from '@/components/Title';
import * as allProjects from '../data/projects';

export default function project({ projects }) {
  return (
    <Container>
      <Title title='Project' description='프로젝트 기록공간입니다.' />
      <ProjectCards projects={projects} />
    </Container>
  );
}

export const getStaticProps = () => {
  const projects = [...allProjects.default];
  return {
    props: {
      projects: projects,
    },
  };
};
