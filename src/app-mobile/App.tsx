import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { reduxStore } from '../store/index';
import Tela1 from './telas/Tela1';
import Tela2 from './telas/Tela2';
import Tela3 from './telas/Tela3';

const MainNavigator = createStackNavigator(
  {
    Tela1: { screen: Tela1 },
    Tela2: { screen: Tela2 },
    Tela3: { screen: Tela3 }
  },
  {
    initialRouteName: 'Tela2'
  }
);

const Rotas = createAppContainer(MainNavigator);

function App(): JSX.Element {
  return (
    <ReduxProvider store={reduxStore}>
      <Rotas />
    </ReduxProvider>
  );
}

export default App;
