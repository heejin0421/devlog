import styled from '@emotion/styled';

export const NavContainer = styled.div`
  display: block;
  position: sticky;
  top: 0;
  width: 100%;
  height: 56px;
  background-color: red;

  .container {
    max-width: 720px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 22px;
    background-color: blue;
    height: 56px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
`;
