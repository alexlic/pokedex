import React, {useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {fetchData} from '@/services/apiRequest';
import {getPredictions} from '@/helpers/search';
import PredictionsList from '@/components/PredictionsList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {NavigationContext} from '@/context/Navigation';

const Search = () => {
  const LIMIT = 1150;
  const [pokemons, setPokemons] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [value, setValue] = useState('');
  const {navigation} = useContext(NavigationContext);

  const onPredictionSelected = item => {
    setValue('');
    setPredictions([]);
    navigation.navigate('PokemonDetails', {
      pokemonName: item.name,
    });
  };

  const onChange = text => {
    setValue(text);
    const pokeList = pokemons;
    const predictionsResults = getPredictions(pokeList, text.toLowerCase());
    setPredictions(predictionsResults);
  };

  useEffect(() => {
    fetchData(`/pokemon?limit=${LIMIT}`)
      .then(({data}) => {
        setPokemons(data.results);
      })
      .catch(err => console.error('Error fetching pokemons in search: ', err));
  }, [LIMIT]);

  return (
    <SafeAreaView style={styles.searchContainer}>
      <View style={styles.head}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon size={26} icon={faArrowLeft} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          value={value}
          onChangeText={onChange}
          placeholder="Search a pokemon"
        />
      </View>
      <PredictionsList
        predictions={predictions}
        onPress={onPredictionSelected}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 4,
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    width: '87%',
    height: 40,
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
    padding: 8,
    fontSize: 20,
  },
  backArrow: {
    marginTop: 25,
    marginLeft: 10,
  },
});

export default Search;
