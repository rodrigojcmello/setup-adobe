import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import Rota from './rotas/Rota';
import Listener from './utils/Listener';
import { historia } from './utils/historia';
import { store, persistor } from '../store/index';
import EstiloGlobal from '../assets/styled-components/EstiloGlobal';
import { tema } from '../assets/styled-components/tema';

// if ('serviceWorker' in navigator && PRODUCTION) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/serviceWorker.js').then();
//   });
// }

function App(): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={tema}>
          <Listener>
            <>
              <Router history={historia}>
                <Rota />
              </Router>
              <EstiloGlobal />
            </>
          </Listener>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

render(<App />, document.getElementById('app'));
