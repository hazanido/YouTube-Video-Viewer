import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ErrorScreen({ message }) {
  const errorMessage = message || 'An unexpected error occurred.'; 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errorMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red', 
  },
});
