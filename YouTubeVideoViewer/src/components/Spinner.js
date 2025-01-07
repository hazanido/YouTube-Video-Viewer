import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function Spinner() {
  console.log('Spinner rendered'); // בדוק אם רכיב Spinner מתנהג כצפוי
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007BFF" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
