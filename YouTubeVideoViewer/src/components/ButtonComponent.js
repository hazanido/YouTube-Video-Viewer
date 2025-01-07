import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function ButtonComponent({ imageSource, onPress, style, imageStyle }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Image
        source={imageSource}
        style={[styles.image, imageStyle]} 
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200, 
    height: 50, 
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%', 
    height: '100%',
  },
});
