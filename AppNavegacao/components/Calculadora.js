import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const Calculadora = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState('')

  function somar() { setResultado(Number(num1) + Number(num2)) }
  function subtrair() { setResultado(Number(num1) - Number(num2)) }
  function multiplicar() { setResultado(Number(num1) * Number(num2)) }
  function dividir() {
    if (Number(num2) === 0) setResultado('Erro: divisão por zero')
    else setResultado(Number(num1) / Number(num2))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite outro número"
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
      />

      <View style={styles.buttonRow}><Button title="Somar" onPress={somar} /></View>
      <View style={styles.buttonRow}><Button title="Subtrair" onPress={subtrair} /></View>
      <View style={styles.buttonRow}><Button title="Multiplicar" onPress={multiplicar} /></View>
      <View style={styles.buttonRow}><Button title="Dividir" onPress={dividir} /></View>

      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
    fontSize: 18,
  },
  buttonRow: {
    marginVertical: 5,
  },
  resultado: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00BFFF',
  },
})

export default Calculadora
