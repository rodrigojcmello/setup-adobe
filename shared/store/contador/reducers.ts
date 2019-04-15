import { Contador, ContadorAction } from './tipos';

const contadorState: Contador = {
  contador: 0
};

const contador = (state = contadorState, action: ContadorAction): Contador => {
  if (action.type === 'EDITAR_CONTADOR') {
    return { contador: action.numero + state.contador };
  }
  return state;
};

export default contador;
