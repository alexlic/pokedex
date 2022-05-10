import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NavigationContext} from '@/context/Navigation';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

const Head = () => {
  const {navigation} = useContext(NavigationContext);
  return (
    <View style={styles.headerContainer}>
      <Text
        style={styles.headerText}
        onPress={() => navigation.navigate('Home')}>
        Pokedex
      </Text>
      <TouchableOpacity
        style={styles.headerSearch}
        onPress={() => navigation.navigate('Search')}>
        <FontAwesomeIcon style={styles.searchIcon} size={26} icon={faSearch} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText: {
    fontSize: 32,
    color: 'red',
    fontWeight: '700',
    paddingTop: 4,
    paddingBottom: 4,
  },
  headerSearch: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    padding: 10,
    borderRadius: 25,
  },
  searchIcon: {
    color: 'black',
  },
});

export default Head;
