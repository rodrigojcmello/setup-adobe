import { Action, combineReducers, createStore } from 'redux';
import { Contador } from './contador/tipos';
import contador from './contador/reducers';
import navegador from './navegador/reducers';

export interface AppState extends Action {
  contador: Contador;
}

const reducers = combineReducers({
  contador,
  navegador
});

export const reduxStore = createStore(
  reducers,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
