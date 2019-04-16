// import styled from 'styled-components';
import styled, { css } from 'styled-components';

// const envWeb = true;
//
// function cssEnv(estilo: any, compWeb: any, compApp: string): any {
//   return styled(envWeb ? compWeb : compApp)`
//     ${estilo}
//   `;
// }

// export const SCpf = cssEnv(
//   css`
//     border: 0;
//     line-height: 32px;
//     border-radius: 4px 0 0 4px;
//     padding: 0 8px;
//   `,
//   'input',
//   'View'
// )();

const e = {
  cpf: css`
    border: 0;
    line-height: 60px;
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
    padding: 0 8px;
    background-color: yellow;
    width: 150px;
    @media (min-width: 480px) {
      background-color: green;
    }
  `,
  // cssWeb: styled(e.cpf)`
  //   @media (min-width: 480px) {
  //     background-color: green;
  //   }
  // `
};

export default e;
