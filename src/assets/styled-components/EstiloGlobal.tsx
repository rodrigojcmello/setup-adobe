import React from 'react';
import { createGlobalStyle } from './index';
import FonteLato from '../fontes/Lato';

const Global = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }): string => theme.fonte1};
    overflow: hidden;
  }
  input, textarea, select, button {
    font-family: ${({ theme }): string => theme.fonte1};
  }
`;

export default function(): JSX.Element {
  return (
    <>
      <FonteLato />
      <Global />
    </>
  );
}
