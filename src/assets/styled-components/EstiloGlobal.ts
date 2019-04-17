import { createGlobalStyle } from './styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }): string => theme.fonte1}, sans-serif;
    overflow: hidden;
  }
`;
