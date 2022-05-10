import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import Head from '@/components/Head';

import {fetchData} from '@/services/apiRequest';

const PokemonDetails = ({route}) => {
  const {pokemonName} = route.params;
  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    fetchData(`/pokemon/${pokemonName}`)
      .then(({data}) => {
        setPokeData(data);
      })
      .catch(err => console.log(err));
  }, [pokemonName]);

  return (
    <SafeAreaView>
      <Head />
      {pokeData && (
        <PokemonCard
          imageURL={pokeData.sprites?.front_default}
          name={pokeData.name}
          types={pokeData.types}
          id={pokeData.id}
        />
      )}
    </SafeAreaView>
  );
};

export default PokemonDetails;
