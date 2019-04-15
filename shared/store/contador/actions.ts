import { EditarContador, EditarContatadoAction } from './tipos';

const editarContador: EditarContador = (
  numero: number
): EditarContatadoAction => ({
  type: 'EDITAR_CONTADOR',
  numero
});

export default editarContador;
