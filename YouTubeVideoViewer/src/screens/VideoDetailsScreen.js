import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

export default function VideoDetailsScreen({ route }) {
  const { videoId, title, description } = route.params; // Destructure videoId, title, and description from route.params

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.videoContainer}>
        <YoutubeIframe
          height={Dimensions.get('window').width * 0.5625}  // 16:9 aspect ratio
          width={Dimensions.get('window').width * 0.9}  // 90% of screen width
          play={true} 
          videoId={videoId} 
          webViewStyle={{ backgroundColor: 'transparent' }}
        />
      </View>

      
      <Text style={styles.title}>{title}</Text>

      
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
    alignItems: 'center', 
  },
  videoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'justify',
    lineHeight: 22, 
  },
});
