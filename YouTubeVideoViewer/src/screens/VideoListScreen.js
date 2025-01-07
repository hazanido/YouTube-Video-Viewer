import React from 'react';
import { View, FlatList, StyleSheet,Text } from 'react-native';
import VideoCard from '../components/VideoCard'; 
import LoadingScreen from './LoadingScreen'; 
import ErrorScreen from './ErrorScreen'; 
import Spinner from '../components/Spinner'; 
import { useFetchVideos } from '../hooks/useFetchVideos'; 

export default function VideoListScreen({ navigation }) {
  const { videos, loading, error } = useFetchVideos(); 

  if (loading) {
    console.log('LoadingScreen displayed');
    return <LoadingScreen />; // החזרת הקומפוננטה LoadingScreen
  }
  
  if (error) {
    return <ErrorScreen message={error} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <VideoCard
            video={item} 
            onPress={() => navigation.navigate('VideoDetails', { videoId: item.id })}
          />
        )}
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
});
