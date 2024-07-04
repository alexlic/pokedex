import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const RegionCard = ({name, onPress, color, style = {}}) => (
  <TouchableOpacity
    style={{...styles.cardContainer, backgroundColor: color, ...style}}
    onPress={onPress}>
    <Text style={styles.cardText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 4,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
  },
  cardText: {
    padding: 8,
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default RegionCard;
