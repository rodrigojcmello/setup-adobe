import { bindActionCreators, Dispatch } from 'redux';
import { DispatchToProps, StateToProps } from './tipos';
import { AppState } from '../../../store';
import editarContador from '../../../store/contador/actions';

export const mapStateToProps = (state: AppState): StateToProps => ({
  contador: state.contador.contador
});

export const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return bindActionCreators({ editarContador }, dispatch);
};
