import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ErrorComponent({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message || 'Something went wrong!'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
