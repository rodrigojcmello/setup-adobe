import { render } from 'react-dom';
import React from 'react';
import Tela1 from './telas/Tela1';

function App(): JSX.Element {
  return (
    <div>
      <Tela1 />
    </div>
  );
}

render(<App />, document.getElementById('app'));
