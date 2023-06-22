// HomeScreen.js

import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import SearchBar from '../components/SearchBar';
import { searchTmdb } from '../api/tmdb';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState('movie');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    const results = await searchTmdb(searchQuery, searchType);
    setSearchResults(results);
    setIsLoading(false);
  };

  const renderSearchResult = ({ item }) => {
    return (
      <View>
        <Text onPress={() => navigation.navigate('Details', { id: item.id, type: searchType })}>
          {item.title || item.name}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSearch}
        onSelectType={setSearchType}
        selectedType={searchType}
      />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderSearchResult}
        />
      )}
    </View>
  );
}
