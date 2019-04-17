import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import E from './estilo';

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
      <E.TelaScrollView keyboardShouldPersistTaps="never" bounces={false}>
        <Text>Tela2 123</Text>
        <E.CpfView>
          <E.CpfTextInput onChangeText={this.definirCPF} value={cpf} />
          <TouchableOpacity onPress={this.enviar} activeOpacity={0.8}>
            <E.EnviarView>
              <E.EnviarText>enviar</E.EnviarText>
            </E.EnviarView>
          </TouchableOpacity>
        </E.CpfView>
      </E.TelaScrollView>
    );
  }
}

export default Tela2;
