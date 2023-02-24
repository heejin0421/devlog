import styled from '@emotion/styled';

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 23px;

  input {
    width: 100%;
    height: 50px;
    background-color: var(--toggle-bg);

    border: 0px;
    border-radius: 16px;
    font-size: 16px;
    padding: 20px;
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    path {
      color: var(--text-base);
      opacity: 0.5;
    }
  }
`;
