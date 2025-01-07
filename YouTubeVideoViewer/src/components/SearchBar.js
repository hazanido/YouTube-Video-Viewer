import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search videos..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={onSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
