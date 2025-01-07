import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import VideoCard from '../components/VideoCard'; // ייבוא ה-VideoCard
import { fetchVideos } from '../api/videosApi'; // פונקציה לשליפת נתונים (אם צריך נבנה אותה)

export default function VideoListScreen({ navigation }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // קריאה ל-API בעת טעינת העמוד
    const getVideos = async () => {
      try {
        const data = await fetchVideos(); // שליפת סרטונים
        setVideos(data);
      } catch (err) {
        setError('Failed to fetch videos');
      } finally {
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  // מסך טעינה
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading videos...</Text>
      </View>
    );
  }

  // מסך שגיאה
  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id} // מזהה ייחודי לכל סרטון
        renderItem={({ item }) => (
          <VideoCard
            video={item} // פרטי הסרטון
            onPress={() => navigation.navigate('VideoDetails', { videoId: item.id })} // מעבר לעמוד פרטים
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
