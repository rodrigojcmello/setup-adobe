import { Navegador, NavegadorAction } from './tipos';

export const navegadorState: Navegador = {
  larguraJanela: 0
};

const navegador = (
  state = navegadorState,
  action: NavegadorAction
): Navegador => {
  if (action.type === 'DEFINIR_LARGURA_JANELA') {
    return {
      ...state,
      larguraJanela: action.larguraJanela
    };
  }
  return state;
};

export default navegador;
