import { DefinirLarguraJanela } from '../../../store/navegador/tipos';

// Redux

export interface DispatchToProps {
  definirLarguraJanela: DefinirLarguraJanela;
}

// Componente

export interface Props extends DispatchToProps {
  children: JSX.Element;
}
