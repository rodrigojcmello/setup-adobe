import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Tela2 extends Component {
  static navigationOptions = {
    title: 'Tela 2'
  };

  render(): JSX.Element {
    return (
      <View>
        <Text>Tela2</Text>
      </View>
    );
  }
}

export default Tela2;
