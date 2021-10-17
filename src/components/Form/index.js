import React, { useState } from 'react';

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
} from 'react-native';

import ResultIMC from './ResultIMC';
import styles from './style';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState(null);
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator() {
    let heightFormat = height.replace(",", ".")
    return setImc((weight/(heightFormat * heightFormat)).toFixed(2));
  }

  function verificationImc() {
    if(!imc) {
      Vibration.vibrate();
      setErrorMessage("* Campo obrigatório");
    }
  }

  function validationImc() {
    if(height !== null && weight !== null) {
      imcCalculator();
      setWeight(null);
      setHeight(null);
      setMessageIMC('Seu IMC é: ');
      setTextButton('Calcular novamente');
      setErrorMessage(null);
      return
    }
    verificationImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageIMC("Preencha Altura e Peso");
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View style={styles.form}>
      <Text style={styles.formLabel}>Altura</Text>
      {errorMessage ? 
        <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <TextInput
          style={styles.formInput}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex.: 1.75"
          keyboardType="numeric"
        />
      <Text style={styles.formLabel}>Peso</Text>
      {errorMessage ? 
        <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <TextInput
          style={styles.formInput}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex.: 75.600"
          keyboardType="numeric"
        />
      <TouchableOpacity
        style={styles.buttonCalculator}
        onPress={() => validationImc()}
      >
        <Text style={styles.textButtonCalculator}>{textButton}</Text>
      </TouchableOpacity>
      </View>
      <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
    </Pressable>
  );
};
