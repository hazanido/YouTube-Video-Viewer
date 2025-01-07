import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spinner from '../components/Spinner'; // Import Spinner component

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Spinner />
      <Text style={styles.text}>Loading...</Text> 
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
    marginTop: 10,
  },
});
