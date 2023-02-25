import Image from 'next/image';
import Link from 'next/link';
import {
  ProjectCard,
  ProjectCardImg,
  ProjectCardsContainer,
  ProjectDes,
  ProjectInfo,
  ProjectTitle,
} from './ProjectCards.style';

export default function ProjectCards({ projects }) {
  return (
    <ProjectCardsContainer>
      {projects.map((project) => (
        <Link
          href={project.url}
          key={project.title}
          target='_blank'
          rel='noreferrer'
        >
          <ProjectCard>
            <ProjectCardImg>
              <Image
                src={project.image}
                alt={project.title}
                layout='fill'
                objectFit='cover'
              />
            </ProjectCardImg>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDes>{project.description}</ProjectDes>
            </ProjectInfo>
          </ProjectCard>
        </Link>
      ))}
    </ProjectCardsContainer>
  );
}
