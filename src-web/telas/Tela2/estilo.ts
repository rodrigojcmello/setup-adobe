import { styled } from '../../assets/styled-components/styled-components';
import Tela from '../../genericos/Tela';

const estilo = {
  Tela: styled(Tela)`
    background-color: blue;
  `,
  Rotulo: styled.label`
    font-size: 12px;
    display: block;
    color: white;
    line-height: 18px;
  `,
  Cpf: styled.input`
    border: 0;
    line-height: 32px;
    border-radius: 4px 0 0 4px;
    padding: 0 8px;
  `,
  Enviar: styled.button`
    line-height: 32px;
    border: 0;
    border-radius: 0 4px 4px 0;
    padding: 0 12px;
    background-color: #ff9800;
    color: black;
  `
};

export default estilo;
