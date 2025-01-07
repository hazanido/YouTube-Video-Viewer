import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function VideoCard({ video, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>{video.title}</Text>
        <Text style={styles.channel}>{video.channel}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 2,
  },
  thumbnail: {
    width: 100,
    height: 75,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  channel: {
    fontSize: 14,
    color: '#6c757d',
  },
});
