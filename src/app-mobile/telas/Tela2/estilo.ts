import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: 'blue'
  },
  cpfView: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    height: 42
  },
  cpf: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 4,
    backgroundColor: 'white',
    height: 42,
    flex: 1
  },
  enviarView: {
    backgroundColor: '#ff9800',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 0,
    height: 42,
    paddingRight: 12,
    paddingLeft: 12
  },
  enviarText: {
    color: 'black',
    lineHeight: 42
  }
});
