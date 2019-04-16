import React, { Component, SyntheticEvent } from 'react';
import E from './estilo';

class Tela2 extends Component {
  state = {
    cpf: ''
  };

  definirCPF = (evento: SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ cpf: evento.currentTarget.value });
  };

  enviar = (evento: SyntheticEvent<HTMLFormElement>): void => {
    evento.preventDefault();
    this.setState({ cpf: '' });
  };

  render(): JSX.Element {
    const { cpf } = this.state;
    return (
      <E.Tela animacao={false}>
        <h1>Tela 2</h1>
        <form onSubmit={this.enviar}>
          <E.Rotulo>CPF</E.Rotulo>
          <E.Cpf type="text" id="cpf" value={cpf} onChange={this.definirCPF} />
          <E.Enviar>enviar</E.Enviar>
        </form>
      </E.Tela>
    );
  }
}

export default Tela2;
