import { Pokemon } from "@app/models/pokemon";

export type NavigationParamList = {
  pokemonDetail: { pokemon: Pokemon };
  pokemonList: undefined;
};
