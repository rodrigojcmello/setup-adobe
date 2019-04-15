import { NavigationScreenProps } from 'react-navigation';
import { EditarContador } from '../../../../shared/store/contador/tipos';

export interface StateToProps {
  contador: number;
}

export interface DispatchToProps {
  editarContador: EditarContador;
}

export interface Props
  extends StateToProps,
    DispatchToProps,
    NavigationScreenProps {}
