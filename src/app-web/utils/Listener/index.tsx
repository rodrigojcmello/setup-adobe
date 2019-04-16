import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from './connect';
import { Props } from './tipos';

function Listener(props: Props): JSX.Element {
  const { children, definirLarguraJanela } = props;

  useEffect((): (() => void) => {
    function definirLargura(): void {
      definirLarguraJanela(window.outerWidth);
    }
    definirLargura();
    window.addEventListener('resize', definirLargura);
    return (): void => {
      window.removeEventListener('resize', definirLargura);
    };
  }, []);

  return <>{children}</>;
}

export default connect(
  null,
  mapDispatchToProps
)(memo(Listener));
