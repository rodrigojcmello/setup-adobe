export interface Tema {
  cor1: string;
  cor2: string;
  cor3: string;
  fonte1: string;
  preto1: string;
  corDivisao1: string;
  larguraMobile: number;
}

export const tema: Tema = {
  /* Cores */
  cor1: '#1C4A70', // azul escuro
  cor2: '#23B9E2', // azul claro
  cor3: '#FDB913', // amarelo
  preto1: '#464646', // 27% branco
  corDivisao1: '#ECECEC', // 92% branco

  /* Medidas */
  larguraMobile: 425,

  /* Outros */
  fonte1: 'Lato, sans-serif'
};
