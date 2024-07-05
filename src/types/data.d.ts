export type DexEntry = {
  name: string;
  url: string;
};

type DexDescription = {
  description: string;
  language: DexEntry;
};

type PokemonEntry = {
  entry_number: number;
  pokemon_species: DexEntry;
};

export type PokemonEntries = {
  entry_number: number;
  pokemon_species: DexEntry;
};

export type DexData = {
  description: DexDescription[];
  id: number;
  is_main_series: boolean;
  name: striing;
  names: Array<
    DexDescription & {
      name: string;
    }
  >;
  pokemon_entries: PokemonEntries[];
};
