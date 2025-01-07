import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Alert } from 'react-native';
import VideoCard from '../components/VideoCard';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import SearchBar from '../components/SearchBar';
import { useFetchVideos } from '../hooks/useFetchVideos';

export default function VideoListScreen({ navigation }) {
  // State for managing the search query
  const [query, setQuery] = useState('');

  // Hook for fetching videos and managing loading/error states
  const { videos, loading, error, fetchVideos } = useFetchVideos();

  // Function to handle errors more gracefully
  const handleError = (error) => {
    console.error('Error fetching videos:', error); // Log the error for debugging
    Alert.alert(
      'Error',
      'An unexpected error occurred while fetching videos. Please try again later.',
      [{ text: 'OK' }]
    );
  };

  // Handle loading state
  if (loading) {
    console.log('LoadingScreen displayed'); // Log to confirm loading state
    return <LoadingScreen />;
  }

  // Handle error state
  if (error) {
    handleError(error); // Call the error handler function
    return <ErrorScreen message={error} />;
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <SearchBar
        query={query} // Current search query
        setQuery={setQuery} // Function to update the search query
        onSearch={() => {
          try {
            fetchVideos(query); // Fetch videos when the user submits a query
          } catch (err) {
            handleError(err); // Handle any errors that occur during the fetch
          }
        }}
      />

      {/* Video List */}
      <FlatList
        data={videos} // List of videos fetched from the YouTube API
        keyExtractor={(item) => item.id.videoId || item.id} // Unique key for each video item
        renderItem={({ item }) => (
          <VideoCard
            video={item} // Video details passed to the VideoCard component
            onPress={() =>
              // Navigate to VideoDetails screen with video details
              navigation.navigate('VideoDetails', {
                videoId: item.id.videoId || item.id, // Video ID for playback
                title: item.title || 'No title available', // Video title
                description: item.description || 'No description available', // Video description
              })
            }
          />
        )}
        // Component displayed when no videos are found
        ListEmptyComponent={
          !loading && <Text style={styles.noResults}>No videos found. Try a different search!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#6c757d',
  },
});
