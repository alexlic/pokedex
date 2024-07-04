import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './Home';
import SearchScreen from './Search';
import PokeList from './PokeList';
import PokemonDetails from './PokemonDetails';

import NavigationProvider from '../context/Navigation';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="PokeList" component={PokeList} />
          <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationProvider>
  );
};

export default Main;
