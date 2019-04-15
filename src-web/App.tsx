import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Router } from 'react-router-dom';
import EstiloGlobal from './assets/styled-components/EstiloGlobal';
import { ThemeProvider } from './assets/styled-components/styled-components';
import { tema } from './assets/styled-components/tema';
import Rota from './rotas/Rota';
import Listener from './utils/Listener';
import { historia } from './utils/historia';
import { reduxStore } from '../shared/store';

// if ('serviceWorker' in navigator && PRODUCTION) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/serviceWorker.js').then();
//   });
// }

function App(): JSX.Element {
  return (
    <ReduxProvider store={reduxStore}>
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
    </ReduxProvider>
  );
}

render(<App />, document.getElementById('app'));
