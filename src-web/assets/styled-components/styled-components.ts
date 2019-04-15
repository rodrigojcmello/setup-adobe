import * as styledComponents from 'styled-components';
import { ThemeInterface } from './tema';

const {
  default: styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export { styled, createGlobalStyle, keyframes, css, ThemeProvider };
