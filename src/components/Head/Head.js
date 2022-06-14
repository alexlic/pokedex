import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {NavigationContext} from '@/context/Navigation';

const Head = ({isHome = false}) => {
  const {navigation} = useContext(NavigationContext);
  return (
    <View style={styles.headerContainer}>
      {isHome ? (
        <Text style={styles.headerText}>Pokedex</Text>
      ) : (
        <TouchableOpacity
          style={styles.headerArrow}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon size={26} icon={faArrowLeft} />
        </TouchableOpacity>
      )}
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
    paddingTop: 6,
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
  headerArrow: {
    color: 'black',
    marginTop: 12,
    marginLeft: 5,
  },
  searchIcon: {
    color: 'black',
  },
});

export default Head;
