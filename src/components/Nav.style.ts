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
    color: var(--text-base);
  }
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const Links = styled.div`
  ul {
    display: flex;

    li {
      margin-left: 15px;
    }
  }
`;

export const ThemeToggleContainer = styled.div`
  margin-left: 12px;
`;

export const NavTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
