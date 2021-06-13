import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaVerde} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    height: 100,
    width: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
  },
  cajaVerde: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
  },
});
