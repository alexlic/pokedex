import React from 'react';
import {
  Pressable,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {NavigationContext} from '../context/Navigation';
import Head from '../components/Head';
import {capitalizeWord} from '../helpers/text';
import {useFetchRegionList} from '../hooks/useFetchRegionList';

const PokeList = ({route}) => {
  const {dexNum, color} = route.params;

  const {navigation} = React.useContext(NavigationContext);
  const [pokeList] = useFetchRegionList(dexNum);

  return (
    <SafeAreaView>
      <Head />
      <View style={styles.mainContainer}>
        <FlatList
          numColumns={3}
          data={pokeList}
          keyExtractor={item => item.pokemon_species.name}
          style={styles.list}
          renderItem={({item}) => (
            <Pressable
              style={{...styles.button, borderColor: color}}
              onPress={() => {
                navigation.navigate('PokemonDetails', {
                  pokemonName: item.pokemon_species.name,
                });
              }}>
              <Text style={styles.buttonText}>
                {capitalizeWord(item.pokemon_species.name)}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  list: {
    paddingBottom: 50,
  },
  button: {
    borderRadius: 4,
    width: 95,
    borderWidth: 1,
    borderColor: 'green',
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 6,
    marginRight: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
  },
});

export default PokeList;
