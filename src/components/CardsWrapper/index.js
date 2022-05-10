import React, {useContext} from 'react';
import CardsWrapper from './CardsWrapper';
import {NavigationContext} from '@/context/Navigation';

const regionCards = [
  {
    name: 'Kanto',
    dexNumber: 2,
    color: 'red',
  },
  {
    name: 'Jotho',
    dexNumber: 3,
    color: 'blue',
  },
  {
    name: 'Hoenn',
    dexNumber: 4,
    color: 'green',
  },
  {
    name: 'Sinnoh',
    dexNumber: 6,
    color: '#ff6f00',
  },
  {
    name: 'Unova',
    dexNumber: 8,
    color: 'black',
  },
  {
    name: 'Kalos',
    dexNumber: 12,
    color: '#0097a7',
  },
  {
    name: 'Alola',
    dexNumber: 16,
    color: '#689f38',
  },
  {
    name: 'Galar',
    dexNumber: 27,
    color: '#757575',
  },
];

const CardsWrapperContainer = () => {
  const {navigation} = useContext(NavigationContext);

  const handleOnPress = item => {
    if (navigation) {
      navigation.navigate('PokeList', {
        dexNum: item.dexNumber,
        color: item.color,
      });
    }
  };

  return <CardsWrapper list={regionCards} onPress={handleOnPress} />;
};

export default CardsWrapperContainer;
