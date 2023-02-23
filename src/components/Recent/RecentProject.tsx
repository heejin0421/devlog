import Image from 'next/image';
import Link from 'next/link';
import {
  ProjectCard,
  ProjectCardImg,
  ProjectDes,
  ProjectInfo,
  ProjectTitle,
  RecentProjectContainer,
} from './RecentProject.style';
import RecentTitle from './RecentTitle';

export default function RecentProject({ projects }) {
  console.log(projects);
  return (
    <>
      <RecentTitle title='프로젝트' path='project' subtitle='PROJECT' />
      <RecentProjectContainer>
        {projects.slice(0, 5).map((project) => (
          <Link
            key={project.title}
            href={project.url}
            target='_blank'
            rel='noreferrer'
          >
            <ProjectCard>
              <ProjectCardImg>
                <Image
                  src={project.image}
                  alt={project.description}
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
      </RecentProjectContainer>
    </>
  );
}
