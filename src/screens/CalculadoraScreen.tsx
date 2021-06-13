import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {BtnCal} from '../components/BtnCal';
import styles from '../theme/appTheme';

enum Operadores {
  sumar,
  resta,
  multiplicar,
  dividir,
}
const CalculadoraScreen = () => {
  const ultomaOperacion = useRef<Operadores>();
  const naranja = '#FF9427';
  const grisClaro = '#9B9B9B';
  const [numero, setNumero] = useState('100');
  const [numeroAnterior, setNumeroAnterior] = useState('100');

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const btnDelete = () => {
    const isNEgativo = numero.includes('-');
    if (isNEgativo && numero.length === 2) {
      setNumero('0');
    } else if (numero.length < 1) {
      setNumero('0');
    } else {
      setNumero(numero.substring(0, numero.length - 1));
    }
  };

  const cambiarNumeroPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    //no aceptar otro punto
    if (numero.includes('.') && numeroTexto === '.') return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto Decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnMultiplicar = () => {
    cambiarNumeroPorAnterior();
    ultomaOperacion.current = Operadores.multiplicar;
  };

  const btnDividir = () => {
    cambiarNumeroPorAnterior();
    ultomaOperacion.current = Operadores.dividir;
  };

  const btnSumar = () => {
    cambiarNumeroPorAnterior();
    ultomaOperacion.current = Operadores.sumar;
  };

  const btnRestar = () => {
    cambiarNumeroPorAnterior();
    ultomaOperacion.current = Operadores.resta;
  };

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior === '0' && (
        <Text style={styles.resultadopequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de botones 1*/}
      <View style={styles.fila}>
        <BtnCal title="C" color={grisClaro} action={limpiar} />
        <BtnCal title="+/-" color={grisClaro} action={positivoNegativo} />
        <BtnCal title="del" color={grisClaro} action={btnDelete} />
        <BtnCal title="/" color={naranja} action={btnDividir} />
      </View>

      {/* Fila de botones 2*/}
      <View style={styles.fila}>
        <BtnCal title="7" action={armarNumero} />
        <BtnCal title="8" action={armarNumero} />
        <BtnCal title="9" action={armarNumero} />
        <BtnCal title="X" color={naranja} action={btnMultiplicar} />
      </View>

      {/* Fila de botones 3*/}
      <View style={styles.fila}>
        <BtnCal title="4" action={armarNumero} />
        <BtnCal title="5" action={armarNumero} />
        <BtnCal title="6" action={armarNumero} />
        <BtnCal title="-" color={naranja} action={btnRestar} />
      </View>

      {/* Fila de botones 4*/}
      <View style={styles.fila}>
        <BtnCal title="1" action={armarNumero} />
        <BtnCal title="2" action={armarNumero} />
        <BtnCal title="3" action={armarNumero} />
        <BtnCal title="+" color={naranja} action={btnSumar} />
      </View>

      {/* Fila de botones 5*/}
      <View style={styles.fila}>
        <BtnCal title="0" ancho action={armarNumero} />
        <BtnCal title="." action={armarNumero} />
        <BtnCal title="=" color={naranja} action={limpiar} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
