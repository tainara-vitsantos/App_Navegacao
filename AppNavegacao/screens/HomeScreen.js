import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>
      <Text style={styles.subtitle}>Escolha uma opção:</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007AFF' }]}
        onPress={() => navigation.navigate('Calculadora')}
      >
        <Text style={styles.buttonText}>Calculadora</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#00BFFF' }]}
        onPress={() => navigation.navigate('Imc')}
      >
        <Text style={styles.buttonText}>Imc</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 40,
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
