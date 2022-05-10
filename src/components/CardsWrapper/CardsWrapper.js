import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import RegionCard from '../RegionCard/RegionCard';

const CardsWrapper = ({list, onPress}) => (
  <View style={styles.mainContainer}>
    <FlatList
      numColumns={2}
      data={list}
      keyExtractor={item => item.name}
      renderItem={({item}) => (
        <RegionCard
          onPress={() => onPress(item)}
          style={styles.cards}
          name={item.name}
          color={item.color}
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  cards: {
    margin: 12,
  },
});

export default CardsWrapper;
