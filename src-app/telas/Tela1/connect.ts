import { bindActionCreators, Dispatch } from 'redux';
import { DispatchToProps, StateToProps } from './tipos';
import { AppState } from '../../../shared/store';
import editarContador from '../../../shared/store/contador/actions';

export const mapStateToProps = (state: AppState): StateToProps => ({
  contador: state.contador.contador
});

export const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return bindActionCreators({ editarContador }, dispatch);
};
