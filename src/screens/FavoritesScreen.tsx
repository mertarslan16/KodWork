// src/screens/FavoritesScreen.tsx
import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {JobCard} from '../components/JobCard';
import {Job, RootStackParamList} from '../types/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const FavoritesScreen: React.FC = () => {
  const [favorites, setFavorites] = useState<Job[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const favoritesString = await AsyncStorage.getItem('favorites');
      if (favoritesString) {
        setFavorites(JSON.parse(favoritesString));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorite = async (jobId: string | number) => {
    const updatedFavorites = favorites.filter(job => job.id !== jobId);
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error(error);
    }
  };

  const renderFavoriteJob = ({item}: {item: Job}) => (
    <View style={styles.favoriteContainer}>
      <JobCard
        job={item}
        onPress={() => navigation.navigate('JobDetail', {job: item})}
      />
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeFavorite(item.id)}>
        <Text style={styles.removeButtonText}>Remove from Favorites</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorite jobs yet</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={renderFavoriteJob}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  favoriteContainer: {
    marginBottom: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
  removeButton: {
    backgroundColor: '#ff4757',
    padding: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
