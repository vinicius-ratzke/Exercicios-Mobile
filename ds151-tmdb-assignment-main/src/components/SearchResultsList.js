import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getImageUrl } from '../api/tmdb';
import { StyleSheet } from 'react-native';


const SearchResultsList = ({ results }) => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('Details', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.item}>
        <Image
          style={styles.poster}
          source={{ uri: getImageUrl(item.poster_path) }}
        />
        <Text style={styles.title}>{item.title || item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={results}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  poster: {
    width: 50,
    height: 75,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default SearchResultsList;
