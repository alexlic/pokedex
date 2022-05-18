import React, {useContext, useEffect} from 'react';
import Head from '@/components/Head';
import {SafeAreaView} from 'react-native';
import CardsWrapper from '@/components/CardsWrapper';
import {NavigationContext} from '@/context/Navigation';

const Home = ({...props}) => {
  const {setNavigation} = useContext(NavigationContext);
  useEffect(() => {
    setNavigation(props.navigation);
  }, [props.navigation, setNavigation]);
  return (
    <SafeAreaView>
      <Head isHome />
      <CardsWrapper />
    </SafeAreaView>
  );
};

export default Home;
