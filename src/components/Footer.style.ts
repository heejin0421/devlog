import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  height: 112px;
  padding: 24px 12px;
  width: 100%;
  border-top: 1px solid var(--border-color);
`;

export const FooterUnderline = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const IconContainer = styled.div`
  gap: 3px;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--text-base-90);

    &:hover {
      fill: var(--text-base);
    }
  }
`;

export const Copyright = styled.div`
  color: var(--text-base-90);
`;

export const BlogInfo = styled.div`
  color: var(--text-base-90);

  &:hover {
    color: var(--text-base);
  }
`;
