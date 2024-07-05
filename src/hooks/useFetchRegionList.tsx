import React from 'react';
import {getDataByRegion} from '../services/apiRequest';
import {PokemonEntries} from '../types/data';

export const useFetchRegionList = (regionNumber: number) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [list, setList] = React.useState<PokemonEntries[]>([]);

  const getRegionData = React.useCallback(async () => {
    try {
      const dexData = await getDataByRegion(regionNumber);
      setList(dexData.pokemon_entries);
    } catch (err) {
      console.log(`Error fetching data from region ${err}`);
    }
  }, [regionNumber]);

  React.useEffect(() => {
    setIsLoading(true);
    getRegionData();
    setIsLoading(false);
  }, [getRegionData]);

  return [list, isLoading];
};
