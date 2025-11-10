import { View, Text, StyleSheet, Button } from 'react-native'
import Calculadora from '../components/Calculadora'

export default function CalculadoraScreen({ navigation }) {
  return (
    <View style={estilos.container}>
      <Calculadora />
      <View style={estilos.botao}>
        <Button
          title='Voltar para Home'
          onPress={() => navigation.navigate('Home')}
          color="#00BFFF"
        />
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: '60%',
    marginTop: 20,
  },
})




/* import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CalculadoraScreen() {
  const [input, setInput] = useState('');

  // Função para lidar com os botões
  const handlePress = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        // Usa eval com segurança (somente expressões numéricas)
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput('Erro');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', 'C', '+'],
    ['=']
  ];

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input || '0'}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.button,
                  btn === '=' ? styles.equalButton : null,
                  btn === 'C' ? styles.clearButton : null,
                ]}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'flex-end',
    padding: 10,
  },
  display: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  displayText: {
    color: 'white',
    fontSize: 40,
    textAlign: 'right',
  },
  buttonsContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333',
    flex: 1,
    margin: 5,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
  },
  equalButton: {
    backgroundColor: '#4CAF50',
  },
  clearButton: {
    backgroundColor: '#E53935',
  },
}); */
