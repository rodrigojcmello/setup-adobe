export interface Contador {
  contador: number;
}

export interface EditarContatadoAction {
  numero: number;
  type: 'EDITAR_CONTADOR';
}

export type EditarContador = (numero: number) => EditarContatadoAction;

export type ContadorAction = EditarContatadoAction;
