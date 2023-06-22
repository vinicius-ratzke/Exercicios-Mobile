// DetailsScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import { getTmdbDetails, getImageUrl } from '../api/tmdb';

export default function DetailsScreen({ route }) {
  const { id, type } = route.params;
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      const details = await getTmdbDetails(id, type);
      setItemDetails(details);
    };
    fetchItemDetails();
  }, [id, type]);

  return (
    <View>
      {itemDetails ? (
        <>
          <Image
            source={{ uri: getImageUrl(itemDetails.poster_path) }}
            style={{ width: 200, height: 300 }}
          />
          <Text>{itemDetails.title || itemDetails.name}</Text>
          <Text>{itemDetails.release_date || itemDetails.first_air_date}</Text>
          <Text>{itemDetails.overview}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
