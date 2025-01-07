import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComponent from '../components/ButtonComponent'; 

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* title */}
      <Text style={styles.title}>Welcome to YouTube Video Viewer!</Text>

      {/* Description */}
      <Text style={styles.description}>An application that displays a list of videos by search</Text>

      {/* button */}
      <ButtonComponent
        imageSource={require('../../assets/Viewing the video list.png')} 
        onPress={() => navigation.navigate('VideoList')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 20,
    textAlign: 'center',
  },
});
