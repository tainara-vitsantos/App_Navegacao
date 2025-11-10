import { View, StyleSheet, Button } from 'react-native'
import CalculadoraIMC from '../components/Imc.js'

export default function IMCScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CalculadoraIMC />
      <View style={styles.botao}>
        <Button
          title="Voltar para Home"
          onPress={() => navigation.navigate('Home')}
          color="#00BFFF"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  botao: {
    width: '60%',
    alignSelf: 'center',
    marginVertical: 20,
  },
})
