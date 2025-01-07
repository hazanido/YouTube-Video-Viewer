import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ErrorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Error Screen</Text>
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
  },
});
