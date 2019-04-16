import React, { Component, memo } from 'react';
import { Button, Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import e from './estilo';
import { Props } from './tipos';
import { mapDispatchToProps, mapStateToProps } from './connect';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

class Tela1 extends Component<Props> {
  static navigationOptions = {
    title: 'Tela 1'
  };

  adicionar = (): void => {
    const { editarContador } = this.props;
    editarContador(5);
  };

  render(): JSX.Element {
    const { contador, navigation } = this.props;
    return (
      <View style={e.container}>
        <Text style={e.welcome}>TypeScript 123</Text>
        <Text style={e.instructions}>To get started, edit App.js</Text>
        <Text style={e.instructions}>{instructions}</Text>
        <Text style={e.instructions}>
          CONTADOR:
          {contador}
        </Text>
        <Button title="Adicionar" color="#841584" onPress={this.adicionar} />
        <Button
          title="Tela 2"
          onPress={(): boolean => navigation.navigate('Tela2')}
        />
        <Button
          title="Tela 3"
          onPress={(): boolean => navigation.navigate('Tela3')}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Tela1));
