import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './connect';
import { Props } from '../../../src-app/telas/Tela1/tipos';

class Tela1 extends Component<Props> {
  static navigationOptions = {
    title: 'Tela 1'
  };

  adicionar = (): void => {
    const { editarContador } = this.props;
    editarContador(5);
  };

  render(): JSX.Element {
    const { contador } = this.props;
    return (
      <div>
        <h1>{contador}</h1>
        <button type="button" onClick={this.adicionar}>
          adicionar
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Tela1));
