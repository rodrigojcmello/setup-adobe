import { Keyframes } from 'styled-components';
import {
  keyframes,
  styled
} from '../../assets/styled-components/styled-components';

// Estilo Mobile

const avancarEntradaMobile = keyframes`
  from {
    transform: translate3d(50%, 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const avancarSaidaMobile = keyframes`
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(-30%, 0, 0);
    opacity: 0;
  }
`;

const voltarEntradaMobile = keyframes`
  from {
    transform: translate3d(-50%, 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const voltarSaidaMobile = keyframes`
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(30%, 0, 0);
    opacity: 0;
  }
`;

// Estilo Desktop

const entradaDesktop = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Componente

interface Props {
  animacao: boolean;
}

const Tela = styled.div<Props>`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  &.tela-enter {
    z-index: 1;
    animation: ${({ animacao }): Keyframes =>
        animacao ? avancarEntradaMobile : voltarEntradaMobile}
      0.3s forwards;
    @media (min-width: 426px) {
      animation: ${entradaDesktop} 0.3s ease-out forwards;
    }
  }
  &.tela-exit {
    @media (max-width: 425px) {
      animation: ${({ animacao }): Keyframes =>
          animacao ? avancarSaidaMobile : voltarSaidaMobile}
        0.3s forwards;
    }
  }
`;

export default Tela;
