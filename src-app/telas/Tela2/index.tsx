import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native';
import e from './estilo';

class Tela2 extends Component {
  state = {
    cpf: ''
  };

  definirCPF = (cpf: string): void => {
    this.setState({ cpf });
  };

  enviar = (): void => {
    this.setState({ cpf: '' });
  };

  static navigationOptions = {
    title: 'Tela 2'
  };

  render(): JSX.Element {
    const { cpf } = this.state;
    return (
      <ScrollView
        style={e.tela}
        keyboardShouldPersistTaps={false}
        bounces={false}
      >
        <Text>Tela2 123</Text>
        <View style={e.cpfView}>
          <TextInput style={e.cpf} onChangeText={this.definirCPF} value={cpf} />
          <TouchableOpacity onPress={this.enviar} activeOpacity={0.8}>
            <View style={e.enviarView}>
              <Text style={e.enviarText}>enviar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Tela2;
