import { bindActionCreators, Dispatch } from 'redux';
import { DispatchToProps } from './tipos';
import definirLarguraJanela from '../../../store/navegador/actions';

export function mapDispatchToProps(dispatch: Dispatch): DispatchToProps {
  return bindActionCreators(
    {
      definirLarguraJanela
    },
    dispatch
  );
}
