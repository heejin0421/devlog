import styled from '@emotion/styled';

export const MyProfileContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 25px;
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  border-radius: 10px;
  overflow: hidden;

  img {
    position: absolute;
  }
`;
export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;

  gap: 15px;

  h1 {
    font-size: 18px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    font-weight: 400;

    opacity: 0.7;
  }
`;
