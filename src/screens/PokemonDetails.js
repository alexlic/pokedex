import React, {useEffect, useState, useCallback, useContext} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import PokemonCard from '@/components/PokemonCard/PokemonCard';
import Head from '@/components/Head';

import {NavigationContext} from '@/context/Navigation';
import {fetchData} from '@/services/apiRequest';
import {replaceCharAt} from '@/helpers/text';

const PokemonDetails = ({route}) => {
  const {pokemonName, pokemonID} = route.params;
  const [pokeData, setPokeData] = useState({});
  const [currentID, setID] = useState(null);
  const {navigation} = useContext(NavigationContext);

  const onPressNavBtn = id => {
    const customID =
      id > 999 ? `${String(id)[0]}0${String(id).substring(1, String(id))}` : id;
    navigation.navigate('PokemonDetails', {
      pokemonID: customID,
    });
  };

  const fetchPokemonDetails = useCallback(({id, name}) => {
    const pokeId = !id ? name : id && id === 899 ? 10001 : id;
    fetchData(`/pokemon/${pokeId}`)
      .then(({data}) => {
        setPokeData(data);
        // the id is badly assigned after number 999 in the API so we fix it here to prevent errors
        const fixedID = Number(
          data.id > 999 ? replaceCharAt(String(data.id), 1) : data.id,
        );
        setID(fixedID);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetchPokemonDetails({name: pokemonName, id: pokemonID});
  }, [fetchPokemonDetails, pokemonID, pokemonName]);

  return (
    <SafeAreaView>
      <Head />
      {pokeData && (
        <PokemonCard
          imageURL={pokeData.sprites?.front_default}
          name={pokeData.name}
          types={pokeData.types}
          id={currentID}
        />
      )}
      <View style={styles.navButtons}>
        <TouchableOpacity
          style={styles.navButtonContainer}
          onPress={() => onPressNavBtn(currentID - 1)}>
          <FontAwesomeIcon
            style={styles.navButtonsIcon}
            size={18}
            icon={faArrowLeft}
          />
          <Text style={styles.navButtonsText}>{currentID - 1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonContainer}
          onPress={() => onPressNavBtn(currentID + 1)}>
          <Text style={styles.navButtonsText}>{currentID + 1}</Text>
          <FontAwesomeIcon
            style={styles.navButtonsIcon}
            size={18}
            icon={faArrowRight}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 130,
    paddingLeft: 80,
    paddingRight: 80,
  },
  navButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 4,
    borderColor: '#9e9e9e',
    borderWidth: 1,
    borderRadius: 4,
  },
  navButtonsText: {
    fontSize: 18,
    marginLeft: 6,
    marginRight: 6,
    color: '#424242',
  },
  navButtonsIcon: {
    color: '#424242',
  },
});

export default PokemonDetails;
