import styled from '@emotion/styled';

export const NavContainer = styled.div`
  display: block;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;

  backdrop-filter: blur(7px);
  background-color: var(--header-bg);

  .container {
    max-width: 720px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: content-box;
    margin: 0 auto;
    padding: 0 22px;
    height: 56px;
  }
`;

export const NavTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const Links = styled.div`
  ul {
    display: flex;

    li {
      margin-left: 15px;
      font-size: 16px;
      font-weight: 500;

      &:hover a {
        opacity: 0.8;
        color: var(--accent);
      }

      &:active a {
        opacity: 1;
      }

      &[data-selected='true'] a {
        opacity: 1;
        color: var(--accent);
      }
    }
  }
`;

export const ThemeToggleContainer = styled.div`
  margin-left: 12px;
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    transition: all 0.2s ease;
    fill: var(--text-base);
  }

  &:hover {
    svg {
      fill: #ff9a00;
    }
  }
`;
