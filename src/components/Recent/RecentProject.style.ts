import mq from '@/styles/utils/mq';
import styled from '@emotion/styled';

export const RecentProjectContainer = styled.div`
  display: flex;
  margin: 0 -10px;
  gap: 20px;
  a {
    width: 33.3333%;
    display: block;
    box-sizing: border-box;

    padding: 12px 8px;

    ${mq({
      width: ['33.3333%', '33.3333%', '50%', '100%'],
      padding: ['12px 8px', '12px 8px', '8px', '12px 8px'],
    })}
  }
  flex-direction: row;

  ${mq({
    flexDirection: ['row', 'row', 'row', 'column'],
  })}
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  border-radius: 0.6em;
  background-color: var(--card-bg);
  box-shadow: 0px 6px 14px var(--shadow);
  overflow: hidden;
  &:hover {
    transform: scale(1.01);
  }
`;

export const ProjectCardImg = styled.div`
  position: relative;

  &:before {
    content: '';
    position: relative;
    display: block;
    padding-bottom: 64%;

    ${mq({
      paddingBottom: ['64%', '64%', '64%'],
    })}
  }

  img {
    position: absolute;
  }
`;

export const ProjectInfo = styled.div`
  position: relative;

  padding: 12px 16px;
`;

export const ProjectTitle = styled.h3`
  width: 100%;
  display: block;
  font-size: 16px;
  transition: all 0.2s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProjectDes = styled.p`
  margin-top: 4px;
  height: 4.68em;
  word-break: break-word;
  opacity: 0.5;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
