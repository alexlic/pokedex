import React, {useEffect, useState, useContext} from 'react';
import {SafeAreaView, TextInput, StyleSheet} from 'react-native';
import {fetchData} from '@/services/apiRequest';
import {getPredictions} from '@/helpers/search';
import PredictionsList from '@/components/PredictionsList';
import {NavigationContext} from '@/context/Navigation';

const Search = () => {
  const LIMIT = 898;
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
      <TextInput
        style={styles.searchInput}
        value={value}
        onChangeText={onChange}
      />
      <PredictionsList
        predictions={predictions}
        onPress={onPredictionSelected}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    margin: 12,
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
    padding: 8,
    fontSize: 20,
  },
});

export default Search;
