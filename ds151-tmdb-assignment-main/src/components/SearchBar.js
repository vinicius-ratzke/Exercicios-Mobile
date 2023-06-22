// SearchBar.js

import React from 'react';
import { View, TextInput, Button, StyleSheet, Picker } from 'react-native';

const SearchBar = ({ value, onChange, onSubmit, onSelectType, selectedType }) => {
  const handleTypeChange = (value) => {
    onSelectType(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder="Search movies, series, and people"
      />
      <Picker
        style={styles.picker}
        selectedValue={selectedType}
        onValueChange={handleTypeChange}
      >
        <Picker.Item label="Movies" value="movie" />
        <Picker.Item label="TV Shows" value="tv" />
        <Picker.Item label="People" value="person" />
      </Picker>
      <Button title="Search" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  picker: {
    width: 120,
  },
});

export default SearchBar;
