import { StyleSheet } from 'react-native';
import tema from '../../assets/tema';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: tema.cor1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
    fontSize: 24
  }
});
