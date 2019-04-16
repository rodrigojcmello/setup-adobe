import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import e from './estilo';
import estilo from '../../../assets/estilo/Tela2';

const CPF = styled.TextInput`
  shadow-color: black;
  elevation: 3;
`;

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
        keyboardShouldPersistTaps="never"
        bounces={false}
      >
        <Text>Tela2 123</Text>
        <View style={e.cpfView}>
          <CPF onChangeText={this.definirCPF} value={cpf} />
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
