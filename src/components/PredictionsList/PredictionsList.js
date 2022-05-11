import React from 'react';
import {FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {capitalizeWord} from '@/helpers/text';

const PredictionsList = ({predictions, onPress}) => {
  if (!predictions || predictions.length <= 0) {
    return null;
  }
  return (
    <FlatList
      numColumns={1}
      data={predictions}
      style={styles.list}
      keyExtractor={item => item.name}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.listItem} onPress={() => onPress(item)}>
          <Text style={styles.listText}>{capitalizeWord(item.name)}</Text>
          <FontAwesomeIcon size={22} icon={faArrowRight} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    margin: 8,
  },
  listText: {
    fontSize: 18,
  },
  listItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 8,
    justifyContent: 'space-between',
  },
});

export default PredictionsList;
