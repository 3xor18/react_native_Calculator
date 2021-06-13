import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../theme/appTheme';

interface Props {
  title: string;
  color?: string;
  ancho?: boolean;
  action: (numeroTexto: string) => void;
}

export const BtnCal = ({
  title,
  color = '#2D2D2D',
  ancho = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(title)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
