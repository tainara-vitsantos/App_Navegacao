import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setImc] = useState(null)
  const [mensagem, setMensagem] = useState('')

  function calcularIMC() {
    const pesoNum = Number(peso)
    const alturaNum = Number(altura)

    if (!pesoNum || !alturaNum || alturaNum <= 0) {
      setMensagem('Digite valores válidos.')
      setImc(null)
      return
    }

    const resultado = pesoNum / (alturaNum * alturaNum)
    setImc(resultado.toFixed(2))

    if (resultado < 18.5) {
      setMensagem('Abaixo do peso')
    } else if (resultado < 24.9) {
      setMensagem('Peso normal')
    } else if (resultado < 29.9) {
      setMensagem('Sobrepeso')
    } else if (resultado < 34.9) {
      setMensagem('Obesidade grau I')
    } else if (resultado < 39.9) {
      setMensagem('Obesidade grau II')
    } else {
      setMensagem('Obesidade grau III')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (kg)"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua altura (m)"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />

      <View style={styles.button}>
        <Button title="Calcular IMC" onPress={calcularIMC} color="#007AFF" />
      </View>

      {imc && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultado}>Seu IMC: {imc}</Text>
          <Text style={styles.mensagem}>{mensagem}</Text>
        </View>
      )}
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
  button: {
    marginTop: 10,
  },
  resultadoContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00BFFF',
  },
  mensagem: {
    fontSize: 20,
    marginTop: 10,
    color: '#fff',
  },
})

export default CalculadoraIMC
