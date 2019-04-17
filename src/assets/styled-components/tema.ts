export interface Tema {
  cor1: string;
  cor2: string;
  fonte1: string;
  fonte2: string;
  preto1: string;
  preto2: string;
  corDivisao1: string;
  corDivisao2: string;
  larguraMobile: number;
}

export const tema: Tema = {
  /* Cores */
  cor1: '#D1495B',
  cor2: '#D1495B',
  preto1: '#4D4D4D', // 70% preto
  preto2: '#999999', // 60% preto
  corDivisao1: '#EFEFEF', // 94% branco
  corDivisao2: '#EFEFEF', // 94% branco

  /* Medidas */
  larguraMobile: 425,

  /* Outros */
  fonte1: 'Roboto, sans-serif',
  fonte2: 'Roboto, sans-serif'
};
