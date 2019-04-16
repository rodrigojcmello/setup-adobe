// State

type larguraJanelaTipo = number;

export interface LarguraJanela {
  larguraJanela: larguraJanelaTipo;
}

export type Navegador = LarguraJanela;

// DEFINIR_LARGURA_JANELA

export interface DefinirLarguraJanelaAction extends LarguraJanela {
  type: 'DEFINIR_LARGURA_JANELA';
}

export type DefinirLarguraJanela = (
  larguraJanela: larguraJanelaTipo
) => DefinirLarguraJanelaAction;

// Action Geral

export type NavegadorAction = DefinirLarguraJanelaAction;
