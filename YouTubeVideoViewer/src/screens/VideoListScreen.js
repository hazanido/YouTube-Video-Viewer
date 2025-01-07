import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import VideoCard from '../components/VideoCard';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import SearchBar from '../components/SearchBar'; 
import { useFetchVideos } from '../hooks/useFetchVideos';

export default function VideoListScreen({ navigation }) {
  const [query, setQuery] = useState(''); 
  const { videos, loading, error, fetchVideos } = useFetchVideos(); 

 
  if (loading) {
    console.log('LoadingScreen displayed');
    return <LoadingScreen />;
  }

 
  if (error) {
    return <ErrorScreen message={error} />;
  }

  return (
    <View style={styles.container}>
      
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={() => fetchVideos(query)} 
      />

      
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.videoId || item.id} 
        renderItem={({ item }) => (
          <VideoCard
            video={item}
            onPress={() =>
              navigation.navigate('VideoDetails', { videoId: item.id.videoId || item.id })
            }
          />
        )}
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
