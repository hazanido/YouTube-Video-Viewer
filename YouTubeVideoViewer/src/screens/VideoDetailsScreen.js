import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

export default function VideoDetailsScreen({ route }) {
  const { videoId, title, description } = route.params || {}; // Handle missing route.params gracefully

  // Error handling for missing videoId
  if (!videoId) {
    Alert.alert(
      'Error',
      'Video ID is missing. Unable to play the video.',
      [{ text: 'OK' }]
    );
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Unable to load video. Please try again later.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.videoContainer}>
        <YoutubeIframe
          height={Dimensions.get('window').width * 0.5625} // 16:9 aspect ratio
          width={Dimensions.get('window').width * 0.9} // 90% of screen width
          play={true}
          videoId={videoId}
          webViewStyle={{ backgroundColor: 'transparent' }}
          testID="video-player" // For testing purposes
        />
      </View>

      {/* Video Title */}
      <Text style={styles.title} accessibilityLabel={`Title: ${title}`}>
        {title || 'No title available'}
      </Text>

      {/* Video Description */}
      <Text style={styles.description} accessibilityLabel={`Description: ${description}`}>
        {description || 'No description available'}
      </Text>
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  errorText: {
    fontSize: 18,
    color: '#dc3545',
    textAlign: 'center',
  },
});
