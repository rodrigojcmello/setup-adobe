import { Action, combineReducers, createStore } from 'redux';
import { Contador } from './contador/tipos';
import contador from './contador/reducers';

export interface AppState extends Action {
  contador: Contador;
}

const reducers = combineReducers({
  contador
});

export const store = createStore(
  reducers,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
